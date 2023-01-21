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

app.listen(process.env.PORT, ()=> console.log(`running on the door ${process.env.PORT}`))


