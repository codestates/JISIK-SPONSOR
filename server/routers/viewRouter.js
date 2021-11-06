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

const project = {
  id: 1,
  title: '산호가 더 높은 온도에 적응할 수 있을까?',
  path: '산호가-더-높은-온도에-적응할-수-있을까-지식스폰서-1',
  term: 30
};

// HTML template engine
router.get('/pug', (req, res) => {
  const fileURL = path.join(
    __dirname,
    '../templates/emails/project-approve.pug'
  );
  const options = {
    title: '프로젝트를 제출하셨습니다!',
    name: '김코딩',
    project,
    siteURL: process.env.CLIENT_ORIGIN
  };

  const compiledFunction = pug.compileFile(fileURL);
  res.send(compiledFunction(options));
});

module.exports = router;
