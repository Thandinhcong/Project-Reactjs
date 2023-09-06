import axios from "axios";
import { addProduct, deleteProduct, getAllProduct } from "../instances/products";

export const fetchProducts = () => async (dispatch) => {
    try {
        const { data } = await getAllProduct();
        dispatch({ type: "products/fetchProducts", payload: data.products });
    } catch (error) {
        console.log(error);
    } finally {
    }
};
export const ProductAdd = (product) => async (dispatch) => {
    try {
        const data = await addProduct(product);
        dispatch({ type: "products/addProduct", payload: data });
    } catch (error) {
        console.log(error);

    } finally {
    }
};
export const DeleteProduct = (id) => async (dispatch) => {
    try {
        const data = await deleteProduct(id);
        dispatch({ type: "products/deleteProduct", payload: id });
    } catch (error) {
        console.log(error);
    } finally {
    }
};