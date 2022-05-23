var express = require("express");
const Tarifa = require("../models/Tarifa");
var router = express.Router();

// router.get("/", function (req, res, next) {
//   res.send("Página de tarifas");
// });

// Mostrar todas las tarifas
router.get("/all", function (req, res) {
  Tarifa.find(function (err, tarifas) {
    if (err) return res.status(500).send({ message: "Error al realizar la petición" });
    res.json(tarifas);
  });

});

module.exports = router;
