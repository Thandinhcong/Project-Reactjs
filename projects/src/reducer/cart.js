import { produce } from "immer"

const initialState = {
    items: [],
    isLoading: false,
    error: ""
}
const cartReducer = (state = initialState, action) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const product = action.payload;
                const exitsProductIndex = draftState.items.findIndex(item => item._id === action.payload._id);
                if (exitsProductIndex === -1) {
                    draftState.items.push(product)

                } else {
                    draftState.items[exitsProductIndex].quantity++
                }
                const minutes = 5;
                const expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + (minutes * 60 * 1000));

                const cartJSON = JSON.stringify(draftState.items);

                document.cookie = `cart=${cartJSON}; expires=${expirationDate.toUTCString()}; path=/`;
                break
            case "cart/increase": {
                draftState.items.find((item) => item.id === action.payload).quantity++
                break;
            }
            case "cart/decrease": {
                const foundProduct = draftState.items.find((item) => item.id = action.payload)
                foundProduct.quantity--

                if (foundProduct.quantity < 1) {
                    const confilm = window.confirm("Bạn có chắc chắc muốn xóa không");

                    if (confilm) {
                        draftState.items = draftState.items.filter((item) => item.id !== foundProduct.id)
                    }
                    foundProduct.quantity = 1
                }
                break
            }
            default:
                return state;
        }
    })
}
export default cartReducer;