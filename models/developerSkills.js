const skills = [
    {
        id: 1,
        name: 'HTML',
        status: 'Proficient',
        resources: 'Link to resources',
        deadline: 'date',
    },
    {
        id: 2,
        name: 'CSS',
        status: 'Intermediate',
        resources: 'Link to resources',
        deadline: 'date',
    },
    {
        id: 3,
        name: 'Javascript',
        status: 'Intermediate',
        resources: 'Link to resources',
        deadline: 'date',
    },
    {
        id: 4,
        name: 'Express',
        status: 'Beginner',
        resources: 'Link to resources',
        deadline: 'date',
    },
];

function getAllSkills(){
    return skills;
};

function getSkillById(id) {
    return skills.find((skill) => skill.id === id);
};

module.exports = {
    getAllSkills,
    getSkillById,
};