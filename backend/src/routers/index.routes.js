import { Router } from "express";
import authRouter from './auth.routes.js'
import courseRouter from "./courses.routes.js";
import cartRouter from "./cart.routes.js";

const router = Router();
router.use(authRouter);
router.use(courseRouter);
router.use(cartRouter) //usa validacao de token -> deixar no fim do index

export default router;
