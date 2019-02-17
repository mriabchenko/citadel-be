const RoleModel = require('../role.model');

const bishop = new RoleModel({
    turn: 5,
    title: 'Епископ',
    imageUrl: 'assets/images/roles/bishop.png',
    districtBonus: 'Церковный',
    description: 'Вы получаете одно золото за каждый религиозный (синий) квартал в вашем городе. Ваши кварталы не могут быть разрушены Кондотьером.',
    color: '#92baff',
});

module.exports = bishop;
