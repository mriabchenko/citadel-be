const mongoose = require('mongoose');
const GameConfigSchema = require('../schemas/game-config.schema');

const GameConfig = module.exports = mongoose.models.GameConfig || mongoose.model('GameConfig', GameConfigSchema);

