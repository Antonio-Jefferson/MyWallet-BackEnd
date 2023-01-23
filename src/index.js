import express from "express"
import cors from "cors"
import authRouter from "./Routers/authUserRouter.js";
import routerWallet from "./Routers/walletRouter.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

app.use([authRouter, routerWallet])

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`running on the door ${port}`))


