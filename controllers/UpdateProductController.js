import { Products } from "../models/Products.js"
import con from '../db.js'

class UpdateProductController {

    async handle(req, res) {
        const fields = {
            id: req.body.id,
            name: req.body.name,
            availability: req.body.availability
        }
        const Product = new Products()

        Product.update(con, fields)

        res.redirect("/products")
    }
}

export { UpdateProductController }