const mongoose = require('mongoose');
const RoleSchema = require('./role.schema');
const DistrictSchema = require('./district.schema');

const PlayerSchema = module.exports = new mongoose.Schema({
    uid: {type: String, default: ''},
    name: {type: String, default: 'Игрок'},
    money: {type: Number, default: 0},
    photo: {type: '', default: ''},
    isReadyToStart: {type: Boolean, default: false},
    isHost: {type: Boolean, default: false},
    isCreator: {type: Boolean, default: false},
    role: RoleSchema,
    districts: {type: [DistrictSchema], default: []},
    districtOptions: {type: [DistrictSchema], default: []},
});

PlayerSchema.methods.initFromUserInfo = function (userInfo) {
    this.name = userInfo.name;
    this.uid = userInfo.uid;
};

PlayerSchema.methods.setReadiness = function (readiness) {
    this.isReadyToStart = readiness;
};

PlayerSchema.methods.giveMoney = function (val) {
    this.money += val;
};

PlayerSchema.methods.canTakeMoney = function (val) {
    return this.money >= val;
};

PlayerSchema.methods.takeMoney = function (val) {
    this.money -= val;
};

PlayerSchema.methods.takeAllMoney = function () {
    this.money = 0;
};

PlayerSchema.methods.setRole = function (role) {
    this.role = role;
};

PlayerSchema.methods.giveDistrictOption = function (district) {
    this.districtOptions.push(district);
};

PlayerSchema.methods.takeDistrictOption = function (districtId) {
    const card = this.districtOptions.id(districtId);
    if (!!card) {
        card.remove();
    }
};

PlayerSchema.methods.buildDistrict = function (districtId) {
    const district = this.districtOptions.id(districtId);
    if (district) {
        district.remove();
        this.districts.push(district);
    }
};

PlayerSchema.methods.removeDistrict = function (districtId) {
    const district = this.districts.id(districtId);
    if (!!district) {
        district.remove();
    }
};

PlayerSchema.methods.score = function () {
    const summaryValue = this.districts.reduce((prev, curr) => prev += curr.price, 0); // todo
    return summaryValue;
};

// integration
PlayerSchema.methods.canBuildDistrict = function (districtId) {
    const district = this.districtOptions.id(districtId);
    const haveThisDistrictOption = !!district;
    if (!haveThisDistrictOption) {
        return false;
    }
    const haveMoney = this.money >= district.price;
    const maxDistrictsNumber = this.parent().config.districtsToWin;
    const haveNotBuildMaxDistrictsNumber = this.districts.length < maxDistrictsNumber;
    return haveThisDistrictOption && haveMoney && haveNotBuildMaxDistrictsNumber;
};

PlayerSchema.methods.giveDistrictOptionsToChoose = function() {

};
