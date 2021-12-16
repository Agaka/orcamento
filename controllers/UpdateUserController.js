import { Users } from "../models/Users.js"
import con from '../db.js'

class UpdateUserController {

    async handle(req, res) {
        const fields = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        const User = new Users()

        User.update(con, fields)

        res.redirect("/users")
    }
}

export { UpdateUserController }