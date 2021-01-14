const nodeMailer = require('nodemailer');

function sendMail(subject, to, content) {
    let transporter = nodeMailer.createTransport({
        host: 'grazac.com.ng',
        port: 465,
        secure: true,
        auth: {
            user: 'hello@grazac.com.ng',
            pass: 'LdGOfD[MVCDH'
        }
    });
    let mailOptions = {
        from: '"Grazac Academy" <hello@grazac.com.ng>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: content
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            //return console.log(error);
        }
        //console.log('Message %s sent: %s', info.messageId, info.response);
            //res.render('index');
        });
}

module.exports = sendMail;