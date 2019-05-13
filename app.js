const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const users = require('./routes/userApi');
app.use('/users', users);
// collegamento al database
const host = 'localhost';
const dbName = 'stevejobs-versioning-1';
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${host}/${dbName}`);

const db = mongoose.connection;
db.on('error', function() {
    console.error('Connection error!');
});
db.once('open', function() {
    console.log('DB connection Ready');
});

// uso dello schema
const User = require('./models/userSchema');

app.listen(3001);
module.exports = app;
