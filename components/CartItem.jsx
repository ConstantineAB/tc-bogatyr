import axios from 'axios'
import { useState } from 'react'
import Button from './Button'
import Modal from 'react-modal';

//{ id, name, type, size, totalPrice, totalCount, onRemove, onMinus, onPlus, img }

const CartItem = (props) => {
  const totalPrice = props.totalPrice
  const totalCount = props.totalCount
  const productType = props.type

  const handleRemoveClick = () => {
    props.onRemove(props.id)
  }

  const handlePlusItem = () => {
    props.onPlus(props.id)
  }

  const handleMinusItem = () => {
    props.onMinus(props.id)
  }

  const [step, setStep] = useState(0);
	
	const [type, setType] = useState(productType)
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
				type, totalCount, name, phone, email, message
			});
			
			setStep(3);

			
			setType('Заказ товара успешно оформлен!');
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

  return (
    <>
    <div className="cart__item">
         <div className="cart__item-img">
            <img
                className="product-block__image"
                src={props.img}
                alt="Pizza"
            />
        </div>
                  <div className="cart__item-info">
                    <h3>{props.name}</h3>
                    <p>{props.type}, {props.size} см.</p>
                  </div>
                  <div className="cart__item-count">
                    <div
                    onClick={handleMinusItem} className="button button--outline button--circle cart__item-count-minus">
                      <svg  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               
                <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                </svg>

                    </div>
                    <b>{props.totalCount}</b>
                    <div 
                    onClick={handlePlusItem}
                    className="button button--outline button--circle cart__item-count-plus">
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                      </svg>

                    </div>
                  </div>
                  <div className="cart__item-price">
                    <b>{totalPrice} ₽</b>
                  </div>
                  <div className="cart__item-remove">
                    <Button onClick={handleRemoveClick} className="button--circle" outline>
                      Удалить
                    </Button>
                  </div>
                </div>
                <p>Тип товара</p>
                <p>{type}</p>
                <input type='text' value={type} onChange={event => setSize(event.target.value)}/>
                <p>Цена</p>
                <p>{totalCount}</p>
                <input type='text' value={totalCount} onChange={event => setCount(event.target.value)}/>
                <p>Количество</p>
                <p>{totalPrice}</p>
                <input type='text' value={totalPrice} onChange={event => setPrice(event.target.value)}/>

                
                
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
            </>
  )
}

export default CartItem;