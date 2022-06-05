import sendEmail from './../../lib/mail';

export default async function handler(req, res) {
	const message = {
		to: 'krylevsky-test@yandex.ru',
		subject: `Письмо с сайта krylevsky-test от ${req.body.name}`,
		text: `
			Тип: ${req.body.productType},
			Цена: ${req.body.totalPrice},
			Количество: ${req.body.totalCount}
        `, 
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}