const mongoose = require('mongoose'); // Escolha de serviço (corte, barba, combo) - GET

const Servico = mongoose.model('Servico', {
    tipo: {
      type: String,
      enum: ['corte', 'barba', 'combo'],
      required: true
    },
    preco: { type: Number, required: true },
    duracao: { type: Number, required: true } // em minutos
  });
  

module.exports = Servico

