const RoleModel = require('../role.model');

const merchant = new RoleModel({
    turn: 6,
    title: 'Купец',
    imageUrl: 'assets/images/roles/merchant.png',
    districtBonus: 'Торговый',
    description: 'Вы получаете одно золото за каждый торговый (зеленый) квартал в вашем городе. После того, как вы совершили действие, вы получаете одно дополнительное золото. Поэтому, вы можете или получить три золота, или вытянуть карту и получает одно золото.',
    color: '#7caf48',
});

module.exports = merchant;
