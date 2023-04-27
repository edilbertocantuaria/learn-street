import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { checkoutSchema } from '../schemas/purchase.schemas.js';
import { addCart, checkout, removeCart } from '../controllers/purchase.controllers.js';
import { authValidation } from '../middlewares/authSchema.middleware.js';

const purchaseRouter = Router();

purchaseRouter.use(authValidation)
purchaseRouter.post("/checkout", validateSchema(checkoutSchema), checkout);
purchaseRouter.post("/cart",addCart);
purchaseRouter.delete("/cart",removeCart);

export default purchaseRouter;