var express = require("express");
const Clase = require("../models/Clase");
var router = express.Router();

// router.get("/", function (req, res, next) {
//   res.send("Página de clases");
// });

// Mostrar todas las clases
router.get("/all", function (req, res) {
  Clase.find(function (err, clases) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!clases) return res.status(404).send({ message: "No hay clases" });
    res.json(clases);
  });
});

// Mostrar una clase por su nombre
router.get("/:nombre", function (req, res) {
  Clase.findOne({ nombre: req.params.nombre }, function (err, clase) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!clase) return res.status(404).send({ message: "La clase no existe" });
    res.json(clase);
  });
});

// Añade una reserva en un horario de una clase
router.post("/reserva/:nombre", function (req, res) {
  const { token, dia } = req.body;
  Clase.findOne({ nombre: req.params.nombre }, function (err, clase) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!clase) return res.status(404).send({ message: "La clase no existe" });
    clase.horario.map((horario) => {
      if (horario.dia == dia) {
        horario.reserva.push(
          token
        );
      }
    });
    clase.save(function (err, clase) {
      if (err)
        return res
          .status(500)
          .send({ message: "Error al realizar la petición" });
      res.json(clase);
    });
  });
});

// Elimina una reserva en un horario de una clase
router.delete("/reservaD/:nombre", function (req, res) {
  const { token, dia } = req.body;
  Clase.findOne({ nombre: req.params.nombre }, function (err, clase) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!clase) return res.status(404).send({ message: "La clase no existe" });
    clase.horario.map((horario) => {
      if (horario.dia == dia) {
        horario.reserva.map((reserva, index) => {
          if (reserva == token) {
            horario.reserva.splice(index, 1);
          }
        });
      }
    });
    clase.save(function (err, clase) {
      if (err)
        return res.status(500).send({ message: "Error al realizar la petición" });
      res.json(clase);
    });
  });
});

// // Borrar todas las reservas de todas las clases
// router.delete("/reservaB", function (req, res) {
//   Clase.find(function (err, clases) {
//     if (err)
//       return res.status(500).send({ message: "Error al realizar la petición" });
//     if (!clases) return res.status(404).send({ message: "No hay clases" });
//     clases.map((c) => {
//       c.horario.map((h) => {
//         h.reserva = [];
//       });
//     });
//     clases.save(function (err, clases) {
//       if (err)
//         return res.status(500).send({ message: "Error al realizar la petición" });
//       res.json(clases);
//     });
//   });
// });

// Borrar las reservas de una clase
router.delete("/reservaB/:nombre", function (req, res) {
  Clase.findOne({ nombre: req.params.nombre }, function (err, clase) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    if (!clase) return res.status(404).send({ message: "La clase no existe" });
    clase.horario.map((horario) => {
      horario.reserva = [];
    });
    clase.save(function (err, clase) {
      if (err)
        return res.status(500).send({ message: "Error al realizar la petición" });
      res.json(clase);
    });
  });
});


module.exports = router;
