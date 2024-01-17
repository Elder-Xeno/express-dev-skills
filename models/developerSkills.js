const skills = [
  {
    id: 1,
    name: "HTML",
    status: "Proficient",
    resources: [ ],
    deadline: [ ],
  },
  {
    id: 2,
    name: "CSS",
    status: "Intermediate",
    resources: [ ],
    deadline: [ ],
  },
  {
    id: 3,
    name: "Javascript",
    status: "Intermediate",
    resources: [ ],
    deadline: [ ],
  },
  {
    id: 4,
    name: "Express",
    status: "Beginner",
    resources: [ ],
    deadline: [ ],
  },
];

function getAllSkills() {
  return skills;
}

function getSkillById(id) {
  return skills.find((skill) => skill.id === id);
}

function deleteOne(id) {
  id = parseInt(id);
  const index = skills.findIndex((skill) => skill.id === id);
  skills.splice(index, 1);
}

function addNewSkill({ name, status, resources, deadline }) {
  const newSkill = {
    id: skills.length + 1,
    name,
    status,
    resources: [resources],
    deadline,
  };

  skills.push(newSkill);
}

function updateSkill(id, { name, status, resources, deadline }) {
  id = parseInt(id);
  const index = skills.findIndex((skill) => skill.id === id);

  if (index !== -1) {
    // Update name and status
    skills[index].name = name;
    skills[index].status = status;

    // Update resources if provided
    if (resources) {
      // If resources is an array, assign it directly; otherwise, convert to an array
      skills[index].resources = Array.isArray(resources) ? resources : [resources];
    }

    // Update deadline if provided
    if (deadline) {
      skills[index].deadline = deadline;
    }
  }
}


module.exports = {
  getAllSkills,
  getSkillById,
  deleteOne,
  addNewSkill,
  updateSkill,
};
