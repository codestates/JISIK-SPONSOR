const pug = require('pug');
const path = require('path');
const router = require('express').Router();
const { auth } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('Jisik Sponsor!'));

// Authentication API
router.get('/auth', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/logout', auth.logout.post);
router.post('/signup', auth.signup.post);

// Email verified
router.get('/confirm/email', auth.confirm.email);

// HTML template engine
router.get('/pug', (req, res) => {
  const fileURL = path.join(__dirname, 'test.pug');
  const compiledFunction = pug.compileFile(fileURL);

  const options = { title: '퍼그지롱롱' };
  res.send(compiledFunction(options));
});

module.exports = router;
