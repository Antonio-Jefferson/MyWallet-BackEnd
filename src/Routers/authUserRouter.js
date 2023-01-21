import { singUp, singIn } from "../Controllers/usersController.js";
import {Router} from "express"
import {validatSchemas} from "../Middlewares/validatSchemas.js"
import { userValidation, loginValidation } from '../Schemas/userValidation.js'

const authRouter = Router();

authRouter.post("/sing-up",validatSchemas(userValidation), singUp)
authRouter.post("/sing-in",validatSchemas(loginValidation), singIn)

export default authRouter