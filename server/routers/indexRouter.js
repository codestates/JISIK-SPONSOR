const router = require('express').Router();
const { auth } = require('../controllers');
const { user } = require('../models');

// Index
router.get('/', (req, res) => res.send('Jisik Sponsor!'));

// Authentication API
router.get('/auth', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/logout', auth.logout.post);
router.post('/signup', auth.signup.post);

// Email verified
router.get('/confirm/email', auth.confirm.email);

module.exports = router;
