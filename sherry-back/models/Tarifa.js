var TarifaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

var Tarifa = mongoose.model("Tarifa", TarifaSchema);