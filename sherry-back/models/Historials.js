var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Clases = require("./Clase");

var HistorialsSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  historial: {
    type: [],
  }
});

module.exports = mongoose.model("Historials", HistorialsSchema);
