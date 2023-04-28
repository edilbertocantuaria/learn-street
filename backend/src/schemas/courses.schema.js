import joi from "joi";

export const courseSchema = joi.object({
    title: joi.string().max(30).required().trim(),
    price: joi.number().positive().precision(2).strict().required(),
    description: joi.string().max(100).required().trim(),
    theme:joi.string().valid('blue', 'red', 'yellow', 'green').required()
});