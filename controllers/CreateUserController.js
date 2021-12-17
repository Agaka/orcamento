import { Users } from "../models/Users.js"
import con from '../db.js'
import pkg from 'bcryptjs';
const { hash } = pkg;

class CreateUserController {

    async handle(req, res) {
        const { name, email, phone, password } = req.body

        const User = new Users()

        const passwordHash = await hash(password, 8)

        const user = await User.create(con, name, email, phone, passwordHash)

        return res.redirect("/users")

    }
}

export { CreateUserController }