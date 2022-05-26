var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Clases = require("../models/Clase");

var HistorialSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  historial: {
    type: [],
  }
});

module.exports = mongoose.model("Historial", HistorialSchema);
