const router = require('express').Router();
const { users } = require('../controllers');

router
  .route('/userinfo')
  .get(users.userInfo.get)
  .patch(users.userInfo.patch)
  .delete(users.userInfo.delete);

module.exports = router;
