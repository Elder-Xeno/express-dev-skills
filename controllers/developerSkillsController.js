const developerSkills = require('../models/developerSkills');

function getAllSkills(req, res) {
    const allSkills = developerSkillsModel.getAllSkills();
    res.render('skills/index', { skills: allSkills });
  };
  
  function getSkillById(req, res) {
    const skillId = parseInt(req.params.id);
    const skill = developerSkillsModel.getSkillById(skillId);
    res.render('skills/eachSkill', { skill });
  };
  
  module.exports = {
    getAllSkills,
    getSkillById,
  };