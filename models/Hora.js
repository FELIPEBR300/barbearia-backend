const mongoose = require('mongoose'); //Visualização de horários disponíveis- GET

const Hora = mongoose.model('Hora', {
    data: { type: Date, required: true },
    disponivel: { type: Boolean, default: true }
  });
  
  

module.exports = Hora