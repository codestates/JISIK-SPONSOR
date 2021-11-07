require('dotenv').config();
const path = require('path');
const pug = require('pug');
const router = require('express').Router();

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/logout.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/users.html'));
});

router.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/project.html'));
});

router.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/orders.html'));
});

router.get('/cancelPay', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/cancelPay.html'));
});

const project = {
  id: 1,
  title: '산호가 더 높은 온도에 적응할 수 있을까?',
  path: '산호가-더-높은-온도에-적응할-수-있을까-지식스폰서-1',
  term: 30,
  end_date: '2021-11-04T02:43:19.000Z'
};

// HTML template engine
router.get('/pug', (req, res) => {
  const fileURL = path.join(
    __dirname,
    '../templates/emails/project-funding-canceled.pug'
  );
  const options = {
    title: '프로젝트가 취소되었습니다.',
    name: '김코딩',
    project,
    resourceURL: process.env.RESOURCE_URL
  };

  const compiledFunction = pug.compileFile(fileURL);
  res.send(compiledFunction(options));
});

module.exports = router;
