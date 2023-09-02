import axios from "axios";
import { addProduct, getAllProduct } from "../instances/products";

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
        const data = await addProduct("/products", product);
        dispatch({ type: "products/addProduct", payload: data });
    } catch (error) {
        console.log(error);

    } finally {
    }
};
// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//         const data = await axios.delete("http://localhost:8080/products/" + id);
//         dispatch({ type: "products/deleteProduct", payload: id });
//         console.log("data delete :", data);
//     } catch (error) {
//         console.log(error);
//     } finally {
//     }
// };