var express = require("express");
const Historial = require("../models/Historial");
var router = express.Router();

// router.get("/", function (req, res, next) {
//   res.send("Página de tarifas");
// });

// Mostrar todo el historial
router.get("/all", function (req, res) {
  Historial.find(function (err, historials) {
    if (err)
      return res.status(500).send({ message: "Error al realizar la petición" });
    res.json(historials);
  });
});

// Añadir historial
router.post("/add", function (req, res, next) {
  if (req.body.lengtg == 0) return;
  const { historial } = req.body;
  Historial.create(
    {
      historial
    },
    (err, historials) => {
      if (err) return res.status(500).send(err);
      res.json(historials);
    }
  );
});

module.exports = router;
