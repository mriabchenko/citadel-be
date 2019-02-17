const RoleModel = require('../role.model');

const architect = new RoleModel({
    turn: 7,
    title: 'Зодчий',
    imageUrl: 'assets/images/roles/architect.png',
    districtBonus: null,
    description: 'После того, как вы совершили действие, вы тяните две дополнительных карты квартала и помещаете их в руку. Вы можете строить до трех кварталов в течение вашего хода.',
});

module.exports = architect;
