var express = require("express");
const Clase = require("../models/Clase");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Página de clases");
});

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


module.exports = router;
