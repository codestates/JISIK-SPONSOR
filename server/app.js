require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const { auth } = require('./controllers');
const { user } = require('./models');
const router = require('./routers');

// Handling unexpected exceptions
process.on('uncaughtException', (err) => {
  console.log('uncaughtException : ', err);
});

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN, process.env.CLIENT_ORIGIN_SUB],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
  })
);

// Routing
app.get('/', (req, res) => res.send('Jisik Sponsor!'));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.post('/login', auth.login);

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/logout.html'));
});
app.post('/logout', auth.logout);

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/signup.html'));
});
app.post('/signup', auth.signup);

app.get('/confirm/email', async (req, res) => {
  const { key } = req.query;
  console.log(key);

  const findUser = await user.findOne({ where: { key_for_verify: key } });
  if (!findUser) return res.status(404).send('Not Found!');

  const updateUser = await user.update(
    { email_verified: true },
    { where: { key_for_verify: key } }
  );

  const url = process.env.SERVER_ORIGIN + '/login';

  res.redirect(url);
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/upload.html'));
});

app.use('/users', router.userRouter);

// Error handling
app.use((req, res, next) => {
  const error = new Error(
    `${req.method} ${req.originalUrl} There is no router.`
  );
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
