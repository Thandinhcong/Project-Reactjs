import { produce } from "immer"

const initialState = {
    products: [],
    isLoading: false,
    error: "",
}

const productsReducer = (state = initialState, action) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "products/fetchProducts": {
                drafState.products = action.payload
                break
            }
            case "products/addProduct": {
                drafState.products.push(action.payload)
                break
            }
            case "products/deleteProduct": {
                const id = action.payload;
                drafState.products = state.products.filter((item) => item.id !== id);
                break
            }
            default: return state;
        }
    })
}
export default productsReducer;