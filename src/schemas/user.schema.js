const mongoose = require('mongoose');

const UserSchema = module.exports = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

UserSchema.set('toJSON', { virtuals: true });