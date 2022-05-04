var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClaseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  nombre: {
    type: String,
    required: true,
  },
  intensidad: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  horario: [
    {
      dia: {
        type: String,
        required: true,
      },
      hora: {
        type: String,
        required: true,
      },
      reserva: [
        {
          _id: { type: Schema.Types.ObjectId },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Clase", ClaseSchema);
