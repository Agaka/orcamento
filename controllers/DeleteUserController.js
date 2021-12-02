import { Users } from "../models/Users.js"
import con from '../db.js'

class DeleteUserController {

    async handle(req, res) {
        const id = req.params.id
        const User = new Users()

        User.delete(con, id)

        res.redirect("/users")
    }
}

export { DeleteUserController }