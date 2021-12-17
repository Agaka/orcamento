import { Products } from "../models/Products.js"
import con from '../db.js'
class CreateProductController {

    async handle(req, res) {
        const { name, availability } = req.body

        const Product = new Products()

        const product = await Product.create(con, name, parseInt(availability))

        return res.redirect("/products")
    }
}

export { CreateProductController }