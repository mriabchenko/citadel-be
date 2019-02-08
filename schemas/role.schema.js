const mongoose = require('mongoose');

const RoleSchema = module.exports = new mongoose.Schema({
    turn: {type: Number, required: true, min: 1, max: 9},
    title: {type: String, required: true},
    imageUrl: String,
    districtBonus: String,
    description: String,
    color: {type: String, default: '#c1c0b9'},
    isActive: {type: Boolean, default: false},
    isDisabled: Boolean,
});


