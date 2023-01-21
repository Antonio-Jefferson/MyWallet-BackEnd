import joi from "joi";

const welletValidation = joi.object({
    description: joi.string().required(),
    value: joi.number().required(),
    type: joi.string().valid("entrace","exit").required()
})

export {welletValidation};