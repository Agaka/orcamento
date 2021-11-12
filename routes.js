import {Router} from "express"
import { CreateUserController } from "./controllers/CreateUserController.js"
import { CreateBudgetController } from "./controllers/CreateBudgetController.js"
import { CreateProductController } from "./controllers/CreateProductController.js"
import { ListUserController } from "./controllers/ListUserController.js"

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const createBudgetController = new CreateBudgetController()
const createProductController = new CreateProductController()

const router = Router()

// Users
router.post("/users", createUserController.handle)
router.get('/users', listUserController.handle)
router.get('/users/insert', (req, res) => {
    res.render("user/insert.ejs", {})
})
// Budgets
router.post("/budgets", createBudgetController.handle)
router.get('/budgets', (req, res) => {
    res.render("budget/budgets.ejs")
})
router.get('/budgets/insert', (req, res) => {
    res.render("budget/insert.ejs")
})
// Products
router.post("/products", createProductController.handle)
router.get('/products', (req, res) => {
    res.render("product/products.ejs")
})
router.get('/products/insert', (req, res) => {
    res.render("product/insert.ejs")
})

export { router }