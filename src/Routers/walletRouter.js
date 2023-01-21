import {Router} from "express"
import {postEntraceExit, transactions} from "../Controllers/myWalletController.js"
import {authValidation} from "../Middlewares/authWallet.js"
import { validatSchemas } from "../Middlewares/validatSchemas.js"
import {welletValidation} from "../Schemas/walletValidation.js"

const routerWallet = Router()

routerWallet.post("/wallet",authValidation, validatSchemas(welletValidation), postEntraceExit)
routerWallet.get("/wallet",authValidation, transactions)

export default routerWallet;