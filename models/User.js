const mongoose = require('mongoose'); //• Cadastro e login do cliente - Envio de e-mail de confirmação - POST

const User = mongoose.model('User', {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isConfirmed: { type: Boolean, default: false },
    confirmationToken: { type: String }
  });
  



module.exports = User;
