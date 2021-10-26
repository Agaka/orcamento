import { Budgets } from "../models/Budgets.js"
import con from '../db.js'
import path from "path"
const __dirname = path.resolve();

class CreateBudgetController {

    async handle(req, res) {
        const { userId, measures, description } = req.body

        const Budget = new Budgets()

        const budget = await Budget.create(con, parseInt(userId), measures, description)

        return res.sendFile(__dirname + "/views/success.html")

    }
}

export { CreateBudgetController }