import { Router } from 'express';
import { authValidation } from "../middlewares/authSchema.middleware.js" 
import { addCart, removeCart } from '../controllers/cart.controller.js';


const cartRouter = Router();
cartRouter.use(authValidation)
cartRouter.post("/cart",addCart);
cartRouter.delete("/cart",removeCart);


export default cartRouter

