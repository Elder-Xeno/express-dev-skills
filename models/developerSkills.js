const skills = [
    {
        id: 1,
        name: 'HTML',
        status: 'Proficient',
        resources:,
        deadline: ,
    },
    {
        id: 2,
        name: 'CSS',
        status: 'Intermediate',
        resources:,
        deadline: ,
    },
    {
        id: 3,
        name: 'Javascript',
        status: 'Intermediate',
        resources:,
        deadline: ,
    },
    {
        id: 4,
        name: 'Express',
        status: 'Beginner',
        resources:,
        deadline: ,
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