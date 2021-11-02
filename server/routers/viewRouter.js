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
  res.sendFile(path.join(__dirname, '../views/upload.html'));
});

router.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/project.html'));
});

router.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/orders.html'));
});

module.exports = router;
