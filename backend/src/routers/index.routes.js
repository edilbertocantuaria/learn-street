import { Router } from "express";
import authRouter from './auth.routes.js'
import courseRouter from "./courses.routes.js";
import purchaseRouter from "./purchase.routes.js";

const router = Router();
router.use(authRouter);
router.use(courseRouter);
router.use(purchaseRouter);

export default router;
