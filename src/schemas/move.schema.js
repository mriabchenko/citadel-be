const mongoose = require('mongoose');

const MoveSchema = module.exports = new mongoose.Schema({
    isActive: {type: Boolean, default: false},
    nextPlayerId: mongoose.Schema.Types.ObjectId,
    tookDistrictOptions: {type: Boolean, default: false},
    tookMoney: {type: Boolean, default: false},
    builtDistrict: {type: Boolean, default: false},
    usedSpecialAbility: {type: Boolean, default: false},
});


