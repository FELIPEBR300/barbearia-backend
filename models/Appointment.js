const mongoose = require('mongoose')

// Modelo de agendamento
const Appointment = mongoose.model('Appointment', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    referenceImage: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    }
})

module.exports = Appointment
