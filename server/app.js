require('dotenv').config();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const router = require('./routers');
const { changeProjectStatus } = require('./middlewares/schedule/setScheduler');

// 작업 예약: 프로젝트 상태 변경 (매일 0시 0분)
const scheduleData = {
  dayOfWeek: [0, 1, 2, 3, 4, 5, 6],
  hour: 0,
  minute: 0
};
changeProjectStatus(scheduleData);

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
    origin: [
      'http://localhost:3000',
      process.env.CLIENT_ORIGIN,
      process.env.CLIENT_ORIGIN_SUB
    ],
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
