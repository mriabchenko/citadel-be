const mongoose = require('mongoose');
const PlayerSchema = require('../schemas/player.schema');

module.exports = mongoose.models.Player || mongoose.model('Player', PlayerSchema);