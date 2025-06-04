const router = require('express').Router();
const User = require('../models/User'); // ou './models/User' dependendo da estrutura

// Rota POST para criar usuário
router.post('/', async (req, res) => {
  const { name, email, password, isConfirmed, confirmationToken } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  const newUser = {
    name,
    email,
    password,
    isConfirmed,
    confirmationToken
  };

  try {
    await User.create(newUser);
    res.status(201).json({ message: 'Usuário inserido com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


