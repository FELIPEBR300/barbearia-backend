const mongoose = require('mongoose'); //Agendamento - POST

const Agendamento = mongoose.model('Agendamento', {
    nomeCliente: { type: String, required: true },
    servico: { type: String, required: true },
    data: { type: Date, required: true },
    telefone: { type: String, required: false }
  }, { timestamps: true });
  
    


module.exports = Agendamento