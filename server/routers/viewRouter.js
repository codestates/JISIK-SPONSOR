const path = require('path');
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

module.exports = router;
