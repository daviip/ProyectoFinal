var express = require("express");
var router = express.Router();
var User = require("../models/user");
var bcrypt = require("bcryptjs");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

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
router.post("/add", function (req, res, next) {
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
  User.findOne({ dni }).then((u) => {
    if (!u) return res.status(404).send("User not found");

    u.comparePassword(password, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch) return res.status(401).send("Incorrect password");

      User.findOne({ dni }).then((u) => {
        res.json(u);
      });
    });
  });
});

// Eliminar usuario
router.delete("/:id", function (req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// Editar usuario
router.put("/edit/:id", function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// Añade una reserva
router.put("/:id/reservas", function (req, res, next) {
  User.findByIdAndUpdate(
    req.params.id,
    { $push: { reservas: req.body } },
    function (err, user) {
      if (err) return next(err);
      res.json(user);
    }
  );
});

router.post("/reserva/:id", function (req, res) {
  const { clase, dia } = req.body;
  User.findById(req.params.id, function (err, user) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!user) return res.status(404).send({ message: "El usuario no existe" });
    user.reservas.map((reserva) => {
      if (reserva.clase == clase && reserva.dia == dia) {
        return res.status(500).send({ message: "La clase ya está reservada" });
      }
    });
    user.reservas.push({ clase, dia });
    user.save((err, user) => {
      if (err)
        return res.status(500).send({ message: "Error al realizar la petición" });
      return res.status(200).send({ message: "Reserva realizada correctamente" });
    });
  });
});


module.exports = router;
