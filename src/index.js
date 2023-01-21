import express from "express"
import cors from "cors"
import authRouter from "./Routers/authUserRouter.js";
import routerWallet from "./Routers/walletRouter.js";

const app = express();
app.use(cors())
app.use(express.json())

app.use([authRouter, routerWallet])

app.listen(5000, ()=> console.log("running on the door 5000"))


