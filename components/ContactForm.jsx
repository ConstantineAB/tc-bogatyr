import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ContactForm(props) {
	const totalPrice = props.totalPrice
	const totalCount = props.totalCount

	const handleRemoveClick = () => {
		props.onRemove(id)
	  }
	
	  const handlePlusItem = () => {
		props.onPlus(id)
	  }
	
	  const handleMinusItem = () => {
		props.onMinus(id)
	  }
	
	const [step, setStep] = useState(0);
	
	const [type, setType] = useState(props.type)
	const [price, setPrice] = useState(totalPrice)
	const [count, setCount] = useState(totalCount)
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	
	function OpenModal({ action, step, close }) {
		if(step == 1) {
			return <div>
				<button onClick={close}>Закрыть</button>
				<button onClick={action}>Отправить</button>
			</div>
		} else if(step == 2) {
			return <div>
				<button onClick={close}>Закрыть</button>
				<p>Идет отправка!</p>
			</div>
		} else if(step == 3) {
			return <div>
				<button onClick={close}>Закрыть</button>
				<p>Письмо отправлено!</p>
			</div>
		} else if(step == 4) {
			return <div>
				<button onClick={close}>Закрыть</button>
				<p>Произошла ошибка</p>
			</div>
		} else {
			return null;
		}
	}

	function closeModal() {
	setStep(0);
	}
	
	async function sendForm() {
	
		try {
			
			setStep(2);
			 
			await axios.post('http://localhost:3000/api/send-request', {
				type, totalPrice, name, phone, email, message
			});
			
			setStep(3);

			
			setType('');
			setPrice('');
			setName('');
			setPhone('');
			setEmail('');
			setMessage('');
			
		} catch (error) {
			
			setStep(4);
			
			console.log('Sending error', error);
		}
	
	}
	
  return <div> 
	<p>Тип товара</p>
	<p>{type}</p>
	<input type='text' value={type} onChange={event => setSize(event.target.value)}/>
	<p>Цена</p>
	<p>{totalPrice}</p>
	<input type='text' value={totalPrice} onChange={event => setPrice(event.target.value)}/>

	<p>Имя</p>
	<p>{name}</p>
	<input type='text' value={name} onChange={event => setName(event.target.value)}/>
	<p>Телефон</p>
	<p>{phone}</p>
	<input type='text' value={phone} onChange={event => setPhone(event.target.value)}/>
	<p>E-mail</p>
	<p>{email}</p>
	<input type='text' value={email} onChange={event => setEmail(event.target.value)}/>
	<p>Сообщение</p> 
	<p>{message}</p>
	<input type='text' value={message} onChange={event => setMessage(event.target.value)}/>
	
	{step == 0 && <button onClick={() => setStep(1)}>Отправить</button>}
      <Modal 
        isOpen={step != 0}
        onRequestClose={closeModal}
      >
		<OpenModal action={sendForm}
			step={step}
			close={() => setStep(0)}
		/>	
      </Modal>
	
  </div>
}

export default ContactForm