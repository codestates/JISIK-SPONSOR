const router = require('express').Router();
const { auth, oauth, orders } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('Jisik Sponsor!'));

// Authentication API
router.get('/auth', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/logout', auth.logout.post);
router.post('/signup', auth.signup.post, auth.signup.patch);

// OAuth API
router.post('/oauth/google', oauth.google.post);
router.post('/oauth/kakao', oauth.kakao.post);

// Email verified
router.get('/confirm/email', auth.confirm.email);

// Payments API: User Order
router.get('/orders/:userId', orders.orders.get);
router.post('/orders', orders.orders.post);
router.patch('/orders', orders.orders.stop);

// Payments API: Import
router.post('/iamport-webhook', orders.payments.complete);
router.post('/payments/complete', orders.payments.complete);
router.get('/payments/complete/mobile/', orders.payments.complete);
router.post('/payments/cancel', orders.payments.cancel);

module.exports = router;
