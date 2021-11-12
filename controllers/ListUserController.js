import { Users } from "../models/Users.js"
import con from '../db.js'

class ListUserController {

    async handle(req, res) {
        const User = new Users()

        User.list(con, (result) => {
            res.render('user/users.ejs', {users: result})
        })

    }
}

export { ListUserController }