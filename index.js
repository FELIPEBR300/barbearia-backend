const express = require('express')
const mongoose = require('mongoose')
const app = express()


const Agendamento = require('./models/Agendamento');
const Appointment = require('./models/Appointment');
const Confirmacao = require('./models/Confirmacao');
const Fotos = require('./models/Fotos');
const Hora = require('./models/Hora');
const Servico = require('./models/Servico');
const User = require('./models/User');


// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// rota inicial
app.get('/', (req, res) => {
  res.json({ message: 'oi express!!' })
})

// conexão com MongoDB
const DB_USER = 'felipecamargobr10'
const DB_PASSWORD = encodeURIComponent('qLKc6jUsEvFeveFA')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))








// entregar um porta felipecamargobr10 qLKc6jUsEvFeveFA

//mongodb+srv://felipecamargobr10:qLKc6jUsEvFeveFA@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12

// mongodb+srv://felipecamargobr10:qLKc6jUsEvFeveFA@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12