import db from "../database/db.js";
import bcrypt  from "bcrypt"
import { v4 as uuid } from 'uuid'

const  singUp = async (req, res)=>{
    const {email, password, name} = req.body;

    const passwordHas = bcrypt.hashSync(password, 10)

    try {
      await db.collection("users").insertOne({ name, email, password: passwordHas})
      res.status(201).send("Usuário cadastrado com sucesso!")
  
    } catch (error) {
      res.status(500).send(error.message)
    }
}

const singIn = async (req, res)=>{
  const { email, password } = req.body

  try {

    const checkUser = await db.collection('users').findOne({ email })

    if (!checkUser) return res.status(400).send("Usuário ou senha incorretos")

    const isCorrectPassword = bcrypt.compareSync(password, checkUser.password)

    if (!isCorrectPassword) return res.status(400).send("Usuário ou senha incorretos")

    const token = uuid();

    await db.collection("sessoes").insertOne({ idUser: checkUser._id, token })

    return res.status(200).send(token)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

export {singUp, singIn};