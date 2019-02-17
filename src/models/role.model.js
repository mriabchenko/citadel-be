const mongoose = require('mongoose');
const RoleSchema = require('../schemas/role.schema');

module.exports = mongoose.models.Role || mongoose.model('Role', RoleSchema);
