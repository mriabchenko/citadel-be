const mongoose = require('mongoose');
const DistrictsDeckSchema = require('../schemas/districts-deck.schema');

module.exports = mongoose.models.DistrictsDeck ||mongoose.model('DistrictsDeck', DistrictsDeckSchema);
