const DeveloperSkills = require('../models/developerSkill');

module.exports = {
  getAllSkills(req, res) {
    res.render('skills/index', { skills: DeveloperSkills.getAllSkills() });
  },
  
  getSkillById(req, res) {
    const skillId = parseInt(req.params.id);
    res.render('skills/show', { skill: DeveloperSkills.getSkillById(skillId) });
  },
};

  module.exports = {
    getAllSkills,
    getSkillById,
  };