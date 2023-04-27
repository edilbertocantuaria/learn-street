import joi from "joi";

export const checkoutSchema = joi.object({
    name: joi.string().required().trim(),
    card_number: joi.string().min(13).max(16).required().trim(),
    card_valid_date: joi.date().strict().required(),
    card_security_code:joi.string().min(3).max(4).required().trim(),
    email: joi.string().email().required().trim()
});