import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { postUserSchema } from "../schemas/auth.schemas.js"
import { postUser } from '../controllers/auth.controllers.js';
import { authValidation } from "../middlewares/authSchema.middleware.js" //maybe logout!


const authRouter = Router();

authRouter.post("/singup", validateSchema(postUserSchema), postUser);

export default authRouter

