const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Models
require('./models/Servico'); // Apenas para garantir que o modelo seja carregado

// Rotas
const ServicoRoutes = require('./routes/ServicoRoutes');
app.use('/servicos', ServicoRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.json({ message: 'Oi, Express está funcionando!' });
});

// Conexão com MongoDB
const DB_USER = 'felipecamargobr10';
const DB_PASSWORD = encodeURIComponent('qLKc6jUsEvFeveFA');
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12`
)
.then(() => {
  console.log('Conectado ao MongoDB!');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
})
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
