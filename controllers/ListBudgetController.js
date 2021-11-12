import { Budgets } from "../models/Budgets.js"
import con from '../db.js'

class ListBudgetController {

    async handle(req, res) {
        const Budget = new Budgets()

        Budget.list(con, (result) => {
            res.render('budget/budgets.ejs', {budgets: result})
        })

    }
}

export { ListBudgetController }