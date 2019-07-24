const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    joinedDate: Date
});

UserSchema.methods.encryptPassword = async function(pass)
{
    var salt, hash;
    try {
        salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(pass, salt);
        return hash;
    }
    catch(ex)
    {
        console.log(ex);
        return null;
    }
}

UserSchema.methods.comparePassword = function(pass, hash)
{
    return bcrypt.compare(pass, hash);
}

var User = module.exports = mongoose.model('User', UserSchema);