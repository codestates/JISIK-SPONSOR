const router = require('express').Router();
const { projects, teams } = require('../controllers');
const uploadThumbnail = require('../middlewares/uploadFile/projectThumbnail');
const uploadTeamProfile = require('../middlewares/uploadFile/uploadTeamProfile');

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

// Project Teams API
router.post('/:projectId/teams/:teamId', teams.teamInfo.patch); // HTML 테스트용
router.patch('/:projectId/teams/:teamId', teams.teamInfo.patch);

router.post(
  '/:projectId/teams/:teamId/profile',
  teams.teamProfile.validation,
  uploadTeamProfile.single('image'),
  teams.teamProfile.upload
);

module.exports = router;
