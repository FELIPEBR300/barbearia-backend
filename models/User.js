const mongoose = require('mongoose') 
// Modelo de usuário para cadastro e login


const User = mongoose.model('User',{
    name: {
        type: String,
        required: true // Nome é obrigatório
    },
    email: {
        type: String,
        required: true,
        unique: true // E-mail deve ser único
    },
    password: {
        type: String,
        required: true // Senha é obrigatória
    },
    confirmed: {
        type: Boolean,
        default: false // Confirmação por e-mail
    }


})

module.exports = User