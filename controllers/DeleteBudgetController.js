import { Budgets } from "../models/Budgets.js"
import con from '../db.js'

class DeleteBudgetController {

    async handle(req, res) {
        const id = req.params.id
        const Budget = new Budgets()

        Budget.delete(con, id)

        res.redirect("/budgets")
    }
}

export { DeleteBudgetController }