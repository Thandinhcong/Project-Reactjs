import express from "express";


import { checkPermission } from "../middlewares/checkpermission";
import { addCate, deleteCate, getAllCate, getOneCate, updateCate } from "../controller/category";

const routerCate = express.Router();

routerCate.get("/categorys", getAllCate);
routerCate.get("/categorys/:id", getOneCate);
routerCate.post("/categorys", checkPermission, addCate);
routerCate.delete("/categorys/:id", checkPermission, deleteCate);
routerCate.put("/categorys/:id", checkPermission, updateCate);
export default routerCate;