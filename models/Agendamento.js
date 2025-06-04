const mongoose = require('mongoose'); //Modelo de Agendamento

const AgendamentoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  servicoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Servico', required: true },
  dataHora: { type: Date, required: true },
  telefone: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Agendamento', AgendamentoSchema);
