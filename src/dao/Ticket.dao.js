import FlightTicket from '../models/Ticket.model.js.js';   // Importar el modelo de boletos de avión

const flightTicketDAO = {};   // Objeto para acceder a las operaciones del DAO

// Obtener todos los boletos de avión
flightTicketDAO.getAll = async () => {
    const flightTickets = await FlightTicket.find();   // Consultar todos los boletos de avión
    return flightTickets;   // Devolver la lista de boletos de avión
};

// Obtener un boleto de avión por su folio
flightTicketDAO.getOne = async (folio) => {
    const flightTicket = await FlightTicket.findOne({ folio: folio });   // Buscar un boleto de avión por su folio
    return flightTicket;   // Devolver el boleto de avión encontrado
};

// Insertar un nuevo boleto de avión
flightTicketDAO.insertOne = async (flightTicket) => {
    try {
        return await FlightTicket.create(flightTicket);   // Crear un nuevo boleto de avión en la base de datos
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.folio) {
            return { error: "El folio de boleto ya está en uso" };   // Manejar el error de folio duplicado
        } else {
            throw error;   // Lanzar cualquier otro error
        }
    }
};

// Eliminar un boleto de avión por su folio
flightTicketDAO.deleteOne = async (folio) => {
    try {
        const result = await FlightTicket.deleteOne({ folio: folio });   // Eliminar un boleto de avión por su folio
        // Verificar si se eliminó un boleto de avión
        if (result.deletedCount === 1) {
            return { message: 'Boleto de avión eliminado correctamente' };   // Devolver un mensaje de éxito
        } else {
            return { message: 'Boleto de avión no encontrado' };   // Devolver un mensaje de boleto de avión no encontrado
        }
    } catch (error) {
        return { error: error.message };   // Manejar cualquier error
    }
};

// Actualizar un boleto de avión por su folio
flightTicketDAO.updateOne = async (folio, flightTicket) => {
    return await FlightTicket.findOneAndUpdate({ folio: folio }, flightTicket);   // Actualizar un boleto de avión por su folio
};

export default flightTicketDAO;   // Exportar el objeto DAO de boletos de avión
