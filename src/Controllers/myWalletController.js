import db from "../database/db.js";
import dayjs from "dayjs"

const postEntraceExit = async (req, res) => {
    const { description, value, type } = req.body;
    const token  = res.locals.token;
   console.log(token)
    try {
        const transactionUser = {
            userId: token.idUser,
            description,
            value,
            type,
            date: dayjs().format("DD/MM")
        }
        console.log(transactionUser)
        await db.collection("wallet").insertOne(transactionUser);
        res.send(201);
    } catch (error) {
        res.status(500).send(error.message)
}
}
const transactions = async (_req, res) => {
    const token = res.locals.token;
    try {
        const myListTransactions = await db.collection("wallet").find({ userId: token.idUser }).toArray();
        if (!myListTransactions) return res.senStatus(409)
        res.status(200).send(myListTransactions)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {postEntraceExit, transactions}