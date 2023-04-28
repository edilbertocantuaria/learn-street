import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { postUserSchema, loginSchema } from "../schemas/auth.schemas.js"
import { postUser, loginUser } from '../controllers/auth.controllers.js';
import { authValidation } from "../middlewares/authSchema.middleware.js" //maybe logout!


const authRouter = Router();

authRouter.post("/singup", validateSchema(postUserSchema), postUser);

authRouter.post("/", validateSchema(loginSchema), loginUser);

//rota de login

export default authRouter

