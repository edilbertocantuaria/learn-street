import joi from "joi";

export const checkoutSchema = joi.object({
    name: joi.string().required().trim(),
    card_number: joi.string().min(13).max(16).required().trim(),
    card_valid_date: joi.string().regex(/^(0[1-9]|1[0-2])\/(00|1[0-9]|2[0-9]|3[0-9|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/).required(),
    card_security_code: joi.string().min(3).max(4).required().trim(),
    email: joi.string().email().required().trim()
});
