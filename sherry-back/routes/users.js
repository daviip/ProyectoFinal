var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Mostrar todos los usuarios
router.get("/all", function (req, res, next) {
  User.find({}, function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

// Mostrar usuario por su id
router.get("/:id", function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// Crear un nuevo usuario
router.post("/register", function (req, res, next) {
  if (req.body.lengtg == 0) return;
  const { nombre, apellido, edad, dni, telefono, email, password, tarifa } =
    req.body;
  User.create(
    {
      nombre,
      apellido,
      edad,
      dni,
      telefono,
      email,
      password,
      tarifa,
    },
    (err, user) => {
      if (err) return res.status(500).send(err);
      res.json(user);
    }
  );
});

// Login un usuario
router.post("/login", function (req, res, next) {
  const { dni, password } = req.body;
  User.findOne({ dni }).then((user) => {
    if (!user) return res.status(404).send("User not found");

    user.comparePassword(password, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch) return res.status(401).send("Incorrect password");

      User.findOne({ dni }).then((user) => {
        res.json(user);
      });
    });
  });
});

module.exports = router;
