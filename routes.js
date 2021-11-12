import {Router} from "express"
import { CreateUserController } from "./controllers/CreateUserController.js"
import { CreateBudgetController } from "./controllers/CreateBudgetController.js"
import { CreateProductController } from "./controllers/CreateProductController.js"
import { ListUserController } from "./controllers/ListUserController.js"
import { ListBudgetController } from "./controllers/ListBudgetController.js"
import { ListProductController } from "./controllers/ListProductController.js"

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const createBudgetController = new CreateBudgetController()
const listBudgetController = new ListBudgetController()
const createProductController = new CreateProductController()
const listProductController = new ListProductController()

const router = Router()

// Users
router.post("/users", createUserController.handle)
router.get('/users', listUserController.handle)
router.get('/users/insert', (req, res) => {
    res.render("user/insert.ejs", {})
})
// Budgets
router.post("/budgets", createBudgetController.handle)
router.get('/budgets', listBudgetController.handle)
router.get('/budgets/insert', (req, res) => {
    res.render("budget/insert.ejs")
})
// Products
router.post("/products", createProductController.handle)
router.get('/products', listProductController.handle)
router.get('/products/insert', (req, res) => {
    res.render("product/insert.ejs")
})

export { router }