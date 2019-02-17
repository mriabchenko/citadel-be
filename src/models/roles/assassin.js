const RoleModel = require('../role.model');

const assassin = new RoleModel({
    turn: 1,
    title: 'Ассасин',
    imageUrl: 'assets/images/roles/assassin.png',
    districtBonus: null,
    description: 'Объявите персонажа, которого вы желаете убить. Игрок, обладающий убитым персонажем, пропускает свой ход.',
});

module.exports = assassin;