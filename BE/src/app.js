import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import uploadImageRouter from "./router/uploadImage"
import routerUser from "./router/user";
import routerCate from "./router/category";
import routerCmt from "./router/comment";
import routeCart from "./router/cart";
import routerProduct from "./router/product";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routerProduct);
app.use("/api", routerUser);
app.use("/api", routerCate);
app.use("/api", routerCmt);
app.use("/api", routeCart);
app.use("/api", uploadImageRouter);
mongoose.connect("mongodb://127.0.0.1:27017/Database");

export const viteNodeApp = app;