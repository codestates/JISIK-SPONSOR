const router = require('express').Router();
const { projects } = require('../controllers');

router
  .route('/')
  .get(projects.multiPoroject.get)
  .post(projects.addProject.post);

router
  .route('/:projectId')
  .get(projects.singleProject.get)
  .patch(projects.singleProject.patch)
  .delete(projects.singleProject.delete);

module.exports = router;
