var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var users = require('./routes/users');
app.use('/users', users);
// collegamento al database
const host = 'localhost';
const dbName = 'user';
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${host}/${dbName}`);

var db = mongoose.connection;
db.on('error', function() {
    console.error('Connection error!')
});
db.once('open', function() {
    console.log('DB connection Ready');
});

//uso dello schema
var User = require('./models/user');



app.listen(3000);
module.exports = app;