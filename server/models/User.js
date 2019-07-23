const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    joinedDate: Date
});

var User = module.exports = mongoose.model('User', UserSchema);