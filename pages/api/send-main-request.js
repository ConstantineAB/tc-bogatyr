import sendEmail from './../../lib/mail';

export default async function handler(req, res) {
	const message = {
		to: 'krylevsky-test@yandex.ru',
		subject: `Письмо с сайта krylevsky-test от ${req.body.name}`,
		text: `
		
			Oбщяя цена: ${req.body.totalPrice},
			Общее количество: ${req.body.totalCount}
			-----------------------------
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.phone},
        	E-mail: ${req.body.email},
        	Сообщение: ${req.body.message},
        `, 
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}