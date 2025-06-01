import mongoose from "mongoose";

const formCollection = "Form";
const formSchema = new mongoose.Schema({
  fechaDeCarga: {
    type: String,
    default: () => {
      const hoy = new Date();
      return hoy.toISOString().split('T')[0]; // "YYYY-MM-DD"
    },
  },
  tipoCobertura: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  disponibilidad: {
    type: String,
    required: false,
  },
  cantidadFamilia: {
    type: Number,
    required: false,
  },
  situacionLaboral: {
    type: String,
    required: true,
  },
  obraSocial: {
    type: String,
    required: true,
  },
  aceptaTerminos: {
    type: Boolean,
    required: true,
  },
});

const formModel = mongoose.model(formCollection, formSchema);
export default formModel;
