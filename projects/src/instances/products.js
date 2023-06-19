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
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.accessToken;
    const uri = '/products/';
    if (!token) {
        console.log('có lỗi xảy ra');
        return;
    }
    return instance.post(uri, product, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
}
export const updateProduct = (id, product) => {
    const uri = '/products/' + id
    return instance.put(uri, product);
}
export const deleteProduct = (id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.accessToken;
    const uri = '/products/' + id
    return instance.delete(uri, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const VND = new Intl.NumberFormat('vi-VN', {
    style: "currency",
    currency: "VND"
})