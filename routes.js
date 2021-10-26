import {Router} from "express"
import { CreateUserController } from "./controllers/CreateUserController.js"
import { CreateBudgetController } from "./controllers/CreateBudgetController.js"
import { CreateProductController } from "./controllers/CreateProductController.js"

const createUserController = new CreateUserController()
const createBudgetController = new CreateBudgetController()
const createProductController = new CreateProductController()

const router = Router()

router.post("/user", createUserController.handle)
router.post("/budget", createBudgetController.handle)
router.post("/product", createProductController.handle)

export { router }