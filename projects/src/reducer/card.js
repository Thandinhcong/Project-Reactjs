import { produce } from "immer"

const initialState = {
    items: []
}
const cardReducer = (state = initialState, action) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "card/add":
                const product = action.payload;
                // tìm index trong giỏ hàng 
                const exitsProductIndex = draftState.items.findIndex(item => item._id === action.payload._id);
                // nếu không có sản phẩm nào trong giỏ hàng thì thêm nó vào
                if (exitsProductIndex === -1) {
                    draftState.items.push(product)

                } else {
                    // ngược lại thì cập nhật số lượng , dựa theo index mới tìm đuọc
                    draftState.items[exitsProductIndex].quantity++
                }
                break
            case "card/increase": {
                draftState.items.find((item) => item._id === action.payload).quantity++
                break;
            }
            case "card/decrease": {
                // tìm sản phẩm theo object  vừa click
                const foundProduct = draftState.items.find((item) => item._id = action.payload)
                // nếu có sản phẩm trong giỏ hàng thì giảm số lượng
                foundProduct.quantity--
                // nếu số lượng giảm dưới 1 thì xóa
                if (foundProduct.quantity < 1) {
                    const confilm = window.confirm("Bạn có chắc chắc muốn xóa không");
                    // nếu được chọn thì xóa
                    if (confilm) {
                        draftState.items = draftState.items.filter((item) => item._id !== foundProduct._id)
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
export default cardReducer;