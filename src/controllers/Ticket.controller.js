import flightTicketDAO from "../dao/Ticket.dao.js";

// Obtener todos los boletos de avión
export const getAll = (req, res) => {
  flightTicketDAO.getAll()
    .then(flightTickets => {
      res.json({ flightTickets }); // Devuelve la lista de boletos de avión en formato JSON
    })
    .catch(err => res.status(500).json({
      status: "Servidor no disponible",
      error: err.message // Accede al mensaje de error
    }));
};

// Obtener un boleto de avión por su folio
export const getOne = (req, res) => {
  flightTicketDAO.getOne(req.params.folio)
    .then(flightTicket => {
      if (!flightTicket) {
        return res.status(404).json({
          message: "Boleto de avión no encontrado :/" // Mensaje de boleto de avión no encontrado
        });
      }
      res.json({ flightTicket }); // Devuelve el boleto de avión encontrado en formato JSON
    })
    .catch(err => res.status(500).json({
      status: "Servidor no disponible",
      error: err.message // Accede al mensaje de error
    }));
};

// Insertar un nuevo boleto de avión
export const insertOne = (req, res) => {
  flightTicketDAO.insertOne(req.body)
    .then(result => {
      console.log("Boleto de avión guardado"); // Mensaje de éxito al guardar el boleto de avión
      res.json({ message: "Boleto de avión guardado exitosamente" }); // Respuesta JSON sin URL de redirección
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ 
        status: "Servidor no disponible", 
        error: err.message // Accede al mensaje de error
      }); 
    });
};

// Eliminar un boleto de avión por su folio
export const deleteOne = (req, res) => {
  flightTicketDAO.deleteOne(req.params.folio)
    .then(result => {
      if (!result) {
        return res.status(404).json({
          message: "Boleto de avión no encontrado :/" // Mensaje de boleto de avión no encontrado
        });
      }
      // Si el boleto de avión se eliminó correctamente, devuelve un mensaje de éxito
      res.status(200).json({
        message: "Boleto de avión eliminado exitosamente"
      });
    })
    .catch(err => { 
      console.error(err);
      res.status(500).json({ 
        status: "Servidor no disponible", 
        error: err.message // Accede al mensaje de error
      }); 
    });
};

// Actualizar un boleto de avión por su folio
export const updateOne = (req, res) => {
  const folio = req.params.folio; // Obtener el folio del boleto de avión
  const updatedData = req.body; // Obtener los datos actualizados del boleto de avión

  flightTicketDAO.updateOne(folio, updatedData) // Actualizar el boleto de avión en la base de datos
      .then(updatedFlightTicket => {
          if (!updatedFlightTicket) { // Si el boleto de avión no se encuentra, devolver un mensaje de error
              return res.status(404).json({
                  message: "Boleto de avión no encontrado"
              });
          }
          res.status(200).json(updatedFlightTicket); // Devolver el boleto de avión actualizado en formato JSON
      })
      .catch(err => { 
          console.error("Error actualizando boleto de avión:", err);
          res.status(500).json({ error: "Error interno del servidor" }); // Manejar cualquier error interno del servidor
      });
};
