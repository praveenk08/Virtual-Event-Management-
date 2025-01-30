require('dotenv').config();
require('colors');
const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, text, html,attachments = [] }) => {
try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,   // Usually 587 for TLS or 465 for SSL
      //  secure: false,            // Set to true for port 465         
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
      }
    });
    // Email options
    const mailOptions = {
      from: '"Praveen" <pk46066@gmail.com>', // Sender address
      to, // Recipient(s)
      subject, // Subject line
      text, // Plain text body
      html, // HTML body (optional)
      attachments: attachments.length > 0 ? attachments : undefined, // Include only if provided
    };
    // Send email //https://ethereal.email/create
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId.green.bold);
    return { success: true, info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

module.exports = sendEmail;