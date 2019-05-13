const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String,
    email: Object,
    born: Number,
    gender: String,

});

const User = mongoose.model('User', userSchema);

module.exports = User;
