/*
 *A module for sending emails from Node.js applications. 
 *It provides a simple and flexible API to send emails using various email providers and protocols.
 *It supports features like attachments, HTML content, and SMTP authentication.
*/
// Examples;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
