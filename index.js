import express from "express"
import bodyParser from 'body-parser'
import con from './db.js'
import { router } from "./routes.js"

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

//Database connection
con.connect((err) => {
    if (err) throw err 
})


app.listen(3000, () => {
    console.log('Rodando')
})
