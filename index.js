import express from "express"
import bodyParser from 'body-parser'
import con from './db.js'
import { router } from "./routes.js"
import path from "path"

const __dirname = path.resolve();
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

//Database connection
con.connect((err) => {
    if (err) throw err 
})

//Routes of views
app.get('/users', (req, res) => {
    res.sendFile(__dirname + "/views/insertUser.html")
})
app.get('/budgets', (req, res) => {
    res.sendFile(__dirname + "/views/insertBudget.html")
})
app.get('/products', (req, res) => {
    res.sendFile(__dirname + "/views/insertProduct.html")
})


app.listen(3000, () => {
    console.log('Rodando')
})
