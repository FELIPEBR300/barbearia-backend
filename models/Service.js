const mongoose = require('mongoose')

const Service = mongoose.model('Service',{ 
    // Modelo de serviço (corte, barba, combo)
    
    name: {
        type: String,
        required: true // Nome do serviço
    },
    description: {
        type: String,
        required: true // Descrição do serviço
    },
    price: {
        type: Number,
        required: true // Preço do serviço
    }

})

module.exports = Service