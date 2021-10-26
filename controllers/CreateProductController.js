import { Products } from "../models/Products.js"
import con from '../db.js'
import path from "path"
const __dirname = path.resolve();

class CreateProductController {

    async handle(req, res) {
        const { name, availability } = req.body

        const Product = new Products()

        const product = await Product.create(con, name, parseInt(availability))

        return res.sendFile(__dirname + "/views/success.html")

    }
}

export { CreateProductController }