const mongoose = require('mongoose'); // Modelo de Usuário  POST

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isConfirmed: { type: Boolean, default: false },
  confirmationToken: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
