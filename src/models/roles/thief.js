const RoleModel = require('../role.model');

const thief = new RoleModel({
    turn: 2,
    title: 'Вор',
    imageUrl: 'assets/images/roles/thief.png',
    districtBonus: null,
    description: 'Объявите персонажа, у кого вы хотите совершить кражу. Игрок, обладающий названным персонажем, когда ход доходит до него, и он показывает свою карту, должен отдать вам все свое золото. Вы не можете украсть золото у убийцы или у убитого персонажа.',
});

module.exports = thief;
