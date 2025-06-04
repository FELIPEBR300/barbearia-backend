const mongoose = require('mongoose'); //Modelo de Foto de Referência

const FotoReferenciaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imagem: { type: String, required: true }, // URL ou caminho da imagem
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FotoReferencia', FotoReferenciaSchema);
