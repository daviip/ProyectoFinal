var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Mostrar todos los usuarios
router.get('/all', function(req, res, next) {
  User.find({}, function(err, users) {
    if(err) return next(err);
    res.json(users);
  });
});

// Mostrar usuario por su id
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if(err) return next(err);
    res.json(user);
  });
});


module.exports = router;
