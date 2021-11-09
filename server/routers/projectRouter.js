const router = require('express').Router();
const { projects } = require('../controllers');
const uploadThumbnail = require('../middlewares/uploadFile/projectThumbnail');
const uploadTeamProfile = require('../middlewares/uploadFile/uploadTeamProfile');

// Projects API
router
  .route('/')
  .get(projects.multiPoroject.getAll)
  .post(projects.addProject.post);
router.get('/user/wishes', projects.multiPoroject.userWishes);
router.get('/user/sponsors', projects.multiPoroject.userSpons);

// Single Projects API
router.get('/single', projects.singleProject.slug);

// Project Comments API
router.get('/comments', projects.comments.getAll);
router
  .route('/:projectId/comments')
  .get(projects.comments.getSingle)
  .post(projects.comments.post);
router
  .route('/:projectId/comments/:commentId')
  .patch(projects.comments.patch)
  .delete(projects.comments.delete);

// Single Projects API
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

// Project Budgets API
router.post('/:projectId/budgets', projects.budgets.post);
router
  .route('/:projectId/budgets/:budgetId')
  .post(projects.budgets.patch) // HTML 테스트용
  .patch(projects.budgets.patch)
  .delete(projects.budgets.delete);

// Project Milestones API
router.post('/:projectId/milestones', projects.milestones.post);
router
  .route('/:projectId/milestones/:milestoneId')
  .post(projects.milestones.patch) // HTML 테스트용
  .patch(projects.milestones.patch)
  .delete(projects.milestones.delete);

// Project Tags API
router
  .route('/:projectId/tags')
  .get(projects.tags.get)
  .post(projects.tags.post);
router.delete('/:projectId/tags/:projectTagId', projects.tags.delete);

// Project Wishes API
router
  .route('/:projectId/wishes')
  .get(projects.wishes.get)
  .post(projects.wishes.post)
  .delete(projects.wishes.delete);
// Project Sponsors API
router.get('/:projectId/sponsors', projects.sponsors.get);

// Project Status API

router.patch('/:projectId/status', projects.status.patch);


module.exports = router;
