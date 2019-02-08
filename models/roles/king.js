const RoleModel = require('../role.model');

const king = new RoleModel({
    turn: 4,
    title: 'Король',
    imageUrl: 'assets/images/roles/king.png',
    districtBonus: 'Дворянский',
    description: 'Вы получаете одно золото за каждый благородный (желтый) квартал в вашем городе. Как только король будет вызван, вы получаете корону',
    color: '#f0d22f',
});

module.exports = king;
