const router = require('express').Router();
const { projects } = require('../controllers');
const uploadThumbnail = require('../middlewares/uploadFile/projectThumbnail');
const uploadTeamProfile = require('../middlewares/uploadFile/uploadTeamProfile');

// Projects API
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
router.post(
  '/:projectId/teams/:teamId/profile',
  projects.teamProfile.validation,
  uploadTeamProfile.single('image'),
  projects.teamProfile.upload
);

router.post('/:projectId/teams/:teamId', projects.teamInfo.patch); // HTML 테스트용
router.patch('/:projectId/teams/:teamId', projects.teamInfo.patch);

// Project Team Members API
router.post('/:projectId/teams/:teamId/members', projects.teamMembers.post);

router
  .route('/:projectId/teams/:teamId/members/:memberId')
  .post(projects.teamMembers.patch) // HTML 테스트용
  .patch(projects.teamMembers.patch)
  .delete(projects.teamMembers.delete);

module.exports = router;
