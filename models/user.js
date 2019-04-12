const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String,
    email: Array,
    born: Number,
    gender: String,
    
});

var User = mongoose.model('User', userSchema);

module.exports = User;