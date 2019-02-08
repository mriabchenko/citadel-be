const mongoose = require('mongoose');
const GameSchema = require('./../schemas/game.schema');

const Game = module.exports = mongoose.models.Game || mongoose.model('Game', GameSchema);
