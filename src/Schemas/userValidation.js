import Joi from "joi"

const userValidation = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().min(8).valid(Joi.ref('password')).required()
});
const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

export {loginValidation, userValidation};