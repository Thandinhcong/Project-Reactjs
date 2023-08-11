import express from "express";
import { AddCart, listCart } from "../controller/Carts";


const routeCart = express.Router();
routeCart.get('/cart', listCart);
routeCart.post('/cart', AddCart)
export default routeCart;