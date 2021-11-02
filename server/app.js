require('dotenv').config();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const router = require('./routers');

// Template engine setting
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

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
app.use('/projects', router.projectRouter);
app.use('/users', router.userRouter);
app.use('/views', router.viewRouter);
app.use('/', router.indexRouter);

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
