const mongoose = require('mongoose'); //Envio de imagem de referência (upload) - POST

const Fotos = mongoose.model('Fotos', {
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    imagem: { type: String, required: false },
    criadoEm: { type: Date, default: Date.now }
  });
  

module.exports = Fotos