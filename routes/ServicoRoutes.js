const express = require('express');
const router = express.Router();
const Servico = require('../models/Servico');

// POST /servicos - Cria um novo serviço
router.post('/', async (req, res) => {
  try {
    const { tipo, preco, duracao } = req.body;

    const novoServico = new Servico({ tipo, preco, duracao });
    await novoServico.save();

    res.status(201).json({ message: 'Serviço criado com sucesso!', servico: novoServico });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar serviço', error });
  }
});

// GET /servicos - Lista todos os serviços
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.find();
    res.status(200).json(servicos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar serviços', error });
  }
});

module.exports = router;
