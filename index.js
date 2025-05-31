// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const User = require('./models/User') //mudei os 3
const Service = require('./models/Service')
const Appointment = require('./models/Appointment')




// forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da Api
app.

// rota inicial / endpoint
app.get('/', (req , res) => {
// mostrar requisisao

res.json({massage: 'oi express!!'})

})




// entregar um porta
const DB_USER = 'felipecamargobr10'
const DB_PASSWORD = encodeURIComponent('qLKc6jUsEvFeveFA')
mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12`
)
.then(() => {
    console.log("conectamos ao mongodb!")
    app.listen(3000) 
})
.catch((err) => console.log(err))











// entregar um porta felipecamargobr10 qLKc6jUsEvFeveFA

//mongodb+srv://felipecamargobr10:qLKc6jUsEvFeveFA@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12

// mongodb+srv://felipecamargobr10:qLKc6jUsEvFeveFA@apiuc12.6dazp8v.mongodb.net/?retryWrites=true&w=majority&appName=apiuc12