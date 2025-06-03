const mongoose = require('mongoose'); // lemprar de estalar 

const Appointment = mongoose.model('Appointment', {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true }
  }, { timestamps: true });
  

module.exports = Appointment