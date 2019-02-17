const mongoose = require('mongoose');
const DistrictSchema = require('../schemas/district.schema');

module.exports = mongoose.models.District || mongoose.model('District', DistrictSchema);
