
require('dotenv').config();
require('colors');
const express = require('express');
const connectDB = require('./config/db');
const sendEmail = require('./helper/emailHelper');
const morgan = require('morgan');

// const limiter = require('express-rate-limit')({
//     windowMs: 1 * 60 * 1000,
//     max: 1,
//     standardHeaders: 'draft-8', 
//     legacyHeaders: false,
// });
// app.use(limiter);



const app = express();
connectDB();

app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`.green.bold);
});

app.use(morgan('dev'));

const userRoute = require('./routes/userRoute');

app.use('/api/users', userRoute);

const eventRoute = require('./routes/eventRoute');
app.use('/api/events', eventRoute);

app.post('/send-email', async (req, res) => {
  const { to, subject, text, html , attachments} = req.body;

  const result = await sendEmail({ to, subject, text, html, attachments });

  if (result.success) {
      res.status(200).json({ message: 'Email sent successfully!', info: result.info });
  } else {
      res.status(500).json({ message: 'Failed to send email', error: result.error });
  }
});

app.get('/', (req, res) => {
    res.send('API is running...');
});
