import { Products } from "../models/Products.js"
import con from '../db.js'

class DeleteProductController {

    async handle(req, res) {
        const id = req.params.id
        const Product = new Products()

        Product.delete(con, id)

        res.redirect("/products")
    }
}

export { DeleteProductController }