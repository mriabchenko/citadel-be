const RoleModel = require('../role.model');

const magician = new RoleModel({
    turn: 3,
    title: 'Чародей',
    imageUrl: 'assets/images/roles/magician.png',
    districtBonus: null,
    description: 'Ты можешь заменить твои карты на карты другого, либо сбросить любое число карт и вытянуть то же число карт из колоды.',
});

module.exports = magician;
