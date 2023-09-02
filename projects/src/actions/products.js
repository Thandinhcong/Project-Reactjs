import { getAllProduct } from "../instances/products";

export const fetchProducts = () => async (dispatch) => {
    try {
        const { data } = await getAllProduct();
        dispatch({ type: "products/fetchProducts", payload: data.products });
    } catch (error) {
        console.log(error);
    } finally {
    }
};