import { Budgets } from "../models/Budgets.js"
import con from '../db.js'

class UpdateBudgetController {

    async handle(req, res) {
        const fields = {
            id: req.body.id,
            measures: req.body.measures,
            description: req.body.description
        }
        const Budget = new Budgets()

        Budget.update(con, fields)

        res.redirect("/budgets")
    }
}

export { UpdateBudgetController }