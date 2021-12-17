import {Router} from "express"
import con from './db.js'
import { Budgets, Users, Products } from "./models/index.js"
import { CreateUserController } from "./controllers/CreateUserController.js"
import { CreateBudgetController } from "./controllers/CreateBudgetController.js"
import { CreateProductController } from "./controllers/CreateProductController.js"
import { ListUserController } from "./controllers/ListUserController.js"
import { ListBudgetController } from "./controllers/ListBudgetController.js"
import { ListProductController } from "./controllers/ListProductController.js"
import { DeleteUserController } from "./controllers/DeleteUserController.js"
import { DeleteProductController } from "./controllers/DeleteProductController.js"
import { DeleteBudgetController } from "./controllers/DeleteBudgetController.js"
import { UpdateUserController } from "./controllers/UpdateUserController.js"
import { UpdateBudgetController } from "./controllers/UpdateBudgetController.js"
import { UpdateProductController } from "./controllers/UpdateProductController.js"

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const deleteUserController =  new DeleteUserController()
const updateUserController =  new UpdateUserController()
const createBudgetController = new CreateBudgetController()
const listBudgetController = new ListBudgetController()
const deleteBudgetController = new DeleteBudgetController()
const updateBudgetController =  new UpdateBudgetController()
const createProductController = new CreateProductController()
const listProductController = new ListProductController()
const deleteProductController = new DeleteProductController()
const updateProductController =  new UpdateProductController()

const router = Router()

// Users
router.post("/users", createUserController.handle)
router.get('/users', listUserController.handle)
router.get('/users/delete/:id', deleteUserController.handle)
router.post('/users/update', updateUserController.handle)
router.get('/users/update/:id', (req, res) => {
    const id = req.params.id
    const User = new Users()
    User.findById(con, id, (result) => {
        res.render("user/update.ejs", {user: result})
    })
    
})
router.get('/users/insert', (req, res) => {
    res.render("user/insert.ejs", {})
})
// Budgets
router.post("/budgets", createBudgetController.handle)
router.get('/budgets', listBudgetController.handle)
router.get('/budgets/delete/:id', deleteBudgetController.handle)
router.post('/budgets/update', updateBudgetController.handle)
router.get('/budgets/update/:id', (req, res) => {
    const id = req.params.id
    const Budget = new Budgets()
    Budget.findById(con, id, (result) => {
        res.render("budget/update.ejs", {budget: result})
    })
    
})
router.get('/budgets/insert', (req, res) => {
    res.render("budget/insert.ejs")
})
// Products
router.post("/products", createProductController.handle)
router.get('/products', listProductController.handle)
router.get('/products/delete/:id', deleteProductController.handle)
router.post('/products/update', updateProductController.handle)
router.get('/products/update/:id', (req, res) => {
    const id = req.params.id
    const Product = new Products()
    Product.findById(con, id, (result) => {
        res.render("product/update.ejs", {product: result})
    })
    
})
router.get('/products/insert', (req, res) => {
    res.render("product/insert.ejs")
})

export { router }