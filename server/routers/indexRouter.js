const router = require('express').Router();
const { auth, orders } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('Jisik Sponsor!'));

// Authentication API
router.get('/auth', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/logout', auth.logout.post);
router.post('/signup', auth.signup.post);

// Email verified
router.get('/confirm/email', auth.confirm.email);

// Payments API: User Order
router.get('/orders/:userId', orders.orders.get);
router.post('/orders', orders.orders.post);

// Payments API: Import
router.post('/iamport-webhook', orders.payments.complete);
router.post('/payments/complete', orders.payments.complete);
router.get('/payments/complete/mobile/', orders.payments.complete);

module.exports = router;
