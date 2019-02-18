const mongoose = require('mongoose');
const UserSchema = require('../schemas/user.schema');

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);