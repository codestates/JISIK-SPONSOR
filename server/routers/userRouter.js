const router = require('express').Router();
const { users } = require('../controllers');
const uploadProfile = require('../middlewares/uploadFile/userProfile');

router
  .route('/me')
  .get(users.me.get)
  .patch(users.me.patch)
  .delete(users.me.delete);

router.post(
  '/profile',
  users.profile.validation,
  uploadProfile.single('image'),
  users.profile.upload
);

router.get('/:userId', users.userInfo.get);

module.exports = router;
