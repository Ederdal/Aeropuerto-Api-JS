import { Schema, model } from "mongoose";

// Definición del esquema del boleto de avión
const flightTicketSchema = new Schema({
  // Folio del boleto (identificador único)
  folio: {
    type: String,
    unique: true,     // Debe ser único
    required: true    // Campo obligatorio
  },
  // Nombre del pasajero
  firstName: {
    type: String,
    required: true    // Campo obligatorio
  },
  // Apellido del pasajero
  lastName: {
    type: String,
    required: true    // Campo obligatorio
  },
  // Aerolínea
  airline: {
    type: String,
    required: true    // Campo obligatorio
  },
  // Equipaje permitido (en kilogramos)
  allowedLuggage: {
    type: Number,
    required: true    // Campo obligatorio
  },
  // Origen del vuelo
  origin: {
    type: String,
    required: true    // Campo obligatorio
  },
  // Destino del vuelo
  destination: {
    type: String,
    required: true    // Campo obligatorio
  },
  // Costo del boleto
  cost: {
    type: Number,
    required: true    // Campo obligatorio
  },
  // Impuesto
  tax: {
    type: Number,
    required: true    // Campo obligatorio
  },
  // Fecha de creación del registro
  createdAt: {
    type: Date,
    default: Date.now   // Valor por defecto es la fecha actual
  },
  // Fecha de actualización del registro
  updatedAt: {
    type: Date,
    default: Date.now   // Valor por defecto es la fecha actual
  }
},
{
  versionKey: false,   // No incluir el campo "__v" en los documentos
  timestamps: true     // Agregar automáticamente campos de fecha de creación y actualización
});

// Exportar el modelo del boleto de avión
export default model('boletos', flightTicketSchema);
