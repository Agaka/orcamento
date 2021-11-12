import { Budgets } from "../models/Budgets.js"
import con from '../db.js'
class CreateBudgetController {

    async handle(req, res) {
        const { userId, measures, description } = req.body

        const Budget = new Budgets()

        const budget = await Budget.create(con, parseInt(userId), measures, description)

        return res.render("success.ejs")

    }
}

export { CreateBudgetController }