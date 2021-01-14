require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors');

const mailer = require('./mailer');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/contact/create', (req, res) => {
    const { name, email, subject, message } = req.body;
    if(name && email && subject && message) {
        let content = `
		<b>Hi Admin,</b><br><br>
		You have a new contact message from your website, below are the details: <br>
		Name: ${name} <br>
		Email: ${email} <br>
		Subject: ${subject} <br>
		Message: ${message} <br><br>
		Best Regards. <br>
		`;
		mailer('New Contact Message From Grazac Academy', 'support@grazac.com.ng, support@grazacacademy.com', content);
		res.json({success: true, msg: 'Your message has been sent, we will get back to you shortly.'});
    } else {
        res.json({success: false, 'msg': 'Invalid parameter.'});
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, _ => {
    console.log(`Server listening on port 3000`);
})