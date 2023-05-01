import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { checkoutSchema } from '../schemas/purchase.schemas.js';
import { addCart, checkout, removeCart, getCart } from '../controllers/purchase.controllers.js';
import { authValidation } from '../middlewares/authSchema.middleware.js';

const purchaseRouter = Router();

purchaseRouter.use(authValidation)
purchaseRouter.post("/checkout", validateSchema(checkoutSchema), checkout);
purchaseRouter.get("/cart", getCart);
purchaseRouter.post("/cart", addCart);
purchaseRouter.delete("/cart/:id", removeCart);

export default purchaseRouter;