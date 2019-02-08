const mongoose = require('mongoose');
const gameConfig = require('./../config/game');

const GameConfigSchema = new mongoose.Schema({
    creatorId: {type: String, required: true},
    districtsToWin: {type: Number, default: gameConfig.districtsForWin},
    initialMoney: {type: Number, default: gameConfig.initialMoney},
    title: {type: String, default: gameConfig.defaultTitle},
});

module.exports = GameConfigSchema;