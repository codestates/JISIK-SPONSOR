const router = require('express').Router();
const { projects } = require('../controllers');
const uploadThumbnail = require('../middlewares/uploadFile/projectThumbnail');

router
  .route('/')
  .get(projects.multiPoroject.get)
  .post(projects.addProject.post);

router
  .route('/:projectId')
  .get(projects.singleProject.get)
  .post(projects.singleProject.patch) // HTML 테스트 용
  .patch(projects.singleProject.patch)
  .delete(projects.singleProject.delete);

router.post(
  '/:projectId/thumbnail',
  projects.thumbnail.validation,
  uploadThumbnail.single('image'),
  projects.thumbnail.upload
);

module.exports = router;
