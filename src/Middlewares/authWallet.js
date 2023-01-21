import db from '../database/db.js'

export async function authValidation(req, res, next) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", '')

  if (!token) return res.status(422).send("Informe o token!")

  try {
    const checkSession = await db.collection("sessions").findOne({ token })

    if (!checkSession) return res.status(401).send("Você não possue acesso!")

    res.locals.sessao = checkSession

    next()

  } catch (error) {
    res.status(500).send(error)
  }
}