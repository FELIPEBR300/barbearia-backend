const mongoose = require('mongoose'); //Modelo de Confirmação de Agendamento

const ConfirmacaoSchema = new mongoose.Schema({
  agendamentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agendamento', required: true },
  confirmado: { type: Boolean, default: false },
  dataConfirmacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Confirmacao', ConfirmacaoSchema);
