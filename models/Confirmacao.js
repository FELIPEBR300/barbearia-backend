const mongoose = require('mongoose'); //• Envio de email de confirmação com detalhes do agendamento - POST

const Confimacao = mongoose.model('Confimacao', {
    clienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
      required: true
    },
    confirmado: { type: Boolean, default: false },
    dataConfirmacao: { type: Date, default: Date.now }
  });
  

module.exports = Confimacao