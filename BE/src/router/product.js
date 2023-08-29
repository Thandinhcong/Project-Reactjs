import express from "express";
import { Addproduct, ListOneProduct, ListProduct, UpdateProduct, deleteProduct } from "../controller/product";
import { checkPermission } from "../middlewares/checkpermission";


const routerProduct = express.Router();

routerProduct.get("/products", ListProduct);
routerProduct.get("/products/:id", ListOneProduct);
routerProduct.post("/products", checkPermission, Addproduct);
routerProduct.delete("/products/:id", checkPermission, deleteProduct);
routerProduct.put("/products/:id", checkPermission, UpdateProduct);
export default routerProduct;