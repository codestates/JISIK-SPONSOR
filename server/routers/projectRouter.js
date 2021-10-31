const router = require('express').Router();
const { projects } = require('../controllers');

router.get('/', projects.multiPoroject.get);

module.exports = router;
