var express = require('express');
var router = express.Router();
var User = require('../models/userSchema');

router.get('/:id', function(req, res) {
    User.find(function(err, users) {
        if (err) return res.status(500).json({error: err});
        res.json(users);
    });
});

router.get('/', function(req, res) {
    //parametro req.query.name
    User.find(function(err, users) {
        if (err) return res.status(500).json({error: err});
        res.json(users);
    });
});

router.post('/', function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, newUser){
        if(err) res.status(500).json({error: err});
        res.status(201).json(newUser);
    });
});

router.delete('/:id', function(req, res) {
    User.findOne({_id: req.params.id})
    .exec(function(err, user) {
        if (err) return res.status(500).json({error: err});
        if (!user) return res.status(404).json({message: 'Utente non trovato'});
        User.remove({_id: req.params.id}, function(err) {
            if (err) return res.status(500).json({error: err});
            res.json({message: 'Utente eliminato correttamente'});
        });
    });
});

router.put('/:id', function(req, res) {
    User.findOne({_id: req.params.id})
    .exec(function(err, user) {
        if (err) return res.status(500).json({error: err});
        if (!user) {
            return res.status(404).json({message: 'Utente non trovato'});
        }
        for (key in req.body) {
            if (req.body.hasOwnProperty(key)) {
            user[key] = req.body[key];
            }
        }
        user.save(function(err) {
            if (err) return res.status(500).json({error: err});
            res.json(user);
        });
    });
});

module.exports = router;