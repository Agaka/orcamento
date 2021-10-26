import { Users } from "../models/Users.js"
import con from '../db.js'
import path from "path"
const __dirname = path.resolve();
import pkg from 'bcryptjs';
const { hash } = pkg;

class CreateUserController {

    async handle(req, res) {
        const { name, email, phone, password } = req.body

        const User = new Users()

        const passwordHash = await hash(password, 8)

        const user = await User.create(con, name, email, phone, passwordHash)

        return res.sendFile(__dirname + "/views/success.html")

    }
}

export { CreateUserController }