var express = require('express');
var router = express.Router();
var developerSkillsController = require('../controllers/developerSkillsController');

router.get('/', developerSkillsController.getAllSkills);
router.get('/eachSkill/:id', developerSkillsController.getSkillById);

module.exports = router;