var express = require("express");
var router = express.Router();
var developerSkillsController = require("../controllers/developerSkillsController");

router.get("/new", developerSkillsController.renderNewSkillForm);
router.post("/", developerSkillsController.addNewSkill);

router.get("/:id", developerSkillsController.getSkillById);
router.delete("/:id", developerSkillsController.deleteSkill);

router.get("/:id/edit", developerSkillsController.renderEditSkillForm);

router.put("/:id", developerSkillsController.updateSkill);

router.get("/", developerSkillsController.getAllSkills);

module.exports = router;
