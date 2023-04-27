import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"

import { postUserSchema } from "../schemas/authSchema.js"

import { postUser } from '../controllers/authController.js';
import { authValidation } from "../middlewares/authSchema.middleware.js" //maybe logout!


const authRouter = Router();

authRouter.post("/singup", validateSchema(postUserSchema), postUser);



