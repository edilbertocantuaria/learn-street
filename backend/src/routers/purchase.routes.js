import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { checkoutSchema } from '../schemas/purchase.schemas.js';
import { checkout } from '../controllers/purchase.controllers.js';

const purchaseRoute = Router();

//adicionar validacao de token

purchaseRoute.post("/checkout", validateSchema(checkoutSchema), checkout);

export default purchaseRoute;