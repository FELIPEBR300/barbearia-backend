const mongoose = require('mongoose'); //Modelo de Serviço

const ServicoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['corte', 'barba', 'combo'],
    required: true
  },
  preco: { type: Number, required: true },
  duracao: { type: Number, required: true } // duração em minutos
}, { timestamps: true });

module.exports = mongoose.model('Servico', ServicoSchema);
