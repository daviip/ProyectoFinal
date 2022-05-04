var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TarifaSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, auto: true},
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tarifa", TarifaSchema);