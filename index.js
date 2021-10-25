const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const con = require('./db')

app.use(bodyParser.urlencoded({extended: true}))

//Database connection
con.connect((err) => {
    if (err) throw err 
})

//Routes
app.use('/', (req, res) => {
    res.send('Olá mundo')
})


app.listen(3000, () => {
    console.log('Rodando')
})
