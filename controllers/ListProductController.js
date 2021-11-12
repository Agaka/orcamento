import { Products } from "../models/Products.js"
import con from '../db.js'

class ListProductController {

    async handle(req, res) {
        const Product = new Products()

        Product.list(con, (result) => {
            res.render('product/products.ejs', {products: result})
        })

    }
}

export { ListProductController }