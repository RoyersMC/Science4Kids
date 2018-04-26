const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const mailerapp = new express();

//view engiine
mailerapp.engine('handlebars',exphbs());
mailerapp.set('view engine', 'handlebars');

//static folder
mailerapp.use('./public',express.static(path.join(__dirname,'public')));

// body parser
mailerapp.use(bodyParser.urlencoded({extended: false}));
mailerapp.use(bodyParser.json());

mailerapp.get('/',(req,res)=> {
  res.render('contact');
});

mailerapp.post('/send', (req,res) => {
  const output = `
    <p>You have new contact request</p>
    <h3>contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>company: ${req.body.company}</li>
      <li>email: ${req.body.email}</li>
      <li>Name: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
});

mailerapp.listen(3001, ()=> console.log('server started'));
