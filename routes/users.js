var express = require('express');
var router = express.Router();
var User = require('../controller/userFunction');

router.delete('/:id', validation, function(req, res){
    var id = parseInt(req.params.id);
    res.json(User.deleteUserById(id));
})

router.get('/:id', function(req, res){
    var id = parseInt(req.params.id);
    res.json(User.getUserById(id));
})

router.post('/', function(req, res){
    User.postUser(req.body.name, req.body.surname, req.body.email, req.body.born, req.body.gender)
    res.status(201).json();
})

module.exports = router;