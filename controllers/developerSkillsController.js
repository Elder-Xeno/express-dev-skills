const DeveloperSkills = require("../models/developerSkills");
const { router } = require("../server");

function getAllSkills(req, res) {
  res.render("skills/index",{
    skills: DeveloperSkills.getAllSkills(),
  });
}

function getSkillById(req, res) {
  const skillId = parseInt(req.params.id);
  const skill = DeveloperSkills.getSkillById(skillId);
  res.render('skills/eachSkill', { skill: skill });
}

function deleteSkill(req, res){
  DeveloperSkills.deleteOne(req.params.id);
  res.redirect('/developerSkills');
}

function renderNewSkillForm(req, res) {
  res.render("skills/new");
}

function addNewSkill(req, res) {
  const { name, status, resources, deadline } = req.body;

  if (!name || !status || !resources || !deadline) {
      return res.status(400).send("All fields are required.");
  }

  DeveloperSkills.addNewSkill({ name, status, resources, deadline });

  res.redirect('/developerSkills');
}

function renderEditSkillForm(req, res) {
  const skillId = parseInt(req.params.id);
  const skill = DeveloperSkills.getSkillById(skillId);
  res.render("skills/edit", { skill: skill });
}

function updateSkill(req, res) {
  const skillId = parseInt(req.params.id);
  const { name, status, resources, deadline } = req.body;

  if (!name || !status || !resources || !deadline) {
    return res.status(400).send("All fields are required.");
  }

  DeveloperSkills.updateSkill(skillId, { name, status, resources, deadline });

  res.redirect(`/developerSkills/${skillId}`);
}

module.exports = {
  getAllSkills,
  getSkillById,
  deleteSkill,
  renderNewSkillForm,
  addNewSkill,
  renderEditSkillForm,
  updateSkill,
};
