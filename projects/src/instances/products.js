import instance from "./instances"

export const getAllProduct = () => {
    const uri = '/products'
    return instance.get(uri);
}
export const getOneProduct = (id) => {
    const uri = '/products/' + id
    return instance.get(uri);
}
export const addProduct = (product) => {
    const uri = '/products/'
    return instance.post(uri, product);
}
export const updateProduct = (id, product) => {
    const uri = '/products/' + id
    return instance.put(uri, product);
}
export const deleteProduct = (id) => {
    const uri = '/products/' + id
    return instance.delete(uri);
}
export const VND = new Intl.NumberFormat('vi-VN', {
    style: "currency",
    currency: "VND"
})