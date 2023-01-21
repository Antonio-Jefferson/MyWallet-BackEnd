import db from "../database/db.js";
import dayjs from "dayjs"

const postEntraceExit = async (req, res) => {
    const { description, value, type } = req.body;
    const {token} = res.locals;
    try {
         await db.collection("wallet").insertOne({
            userId: token.idUser,
            description,
            value,
            type, 
            date: dayjs().format("DD/MM")
        });
        res.send(201);
    } catch (error) {
        res.senStatus(500).send(error);
    }
}

const transactions = async (req, res) => { 
    const {token} = res.locals;
    try {
        const myListTransactions = await db.collection("wallet").find({userId: token.idUser}).toArray();
        if(!myListTransactions) return res.senStatus(409)
        res.senStatus(200).send(myListTransactions)
    } catch (error) {
        res.senStatus(500)
    }
}

export { postEntraceExit, transactions }