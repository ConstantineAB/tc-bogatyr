import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'uglyman25052001@gmail.com',
		pass: 'madne$$KB', 
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'krylevsky-test <krylevsky-test@yandex.ru>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;