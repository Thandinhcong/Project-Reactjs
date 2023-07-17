import getUserToken from "./getUserToken";
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
    const token = getUserToken();
    const uri = '/products/';
    return instance.post(uri, product, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
}
export const updateProduct = (id, product) => {
    const token = getUserToken();
    const uri = '/products/' + id
    return instance.put(uri, product, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
}
export const deleteProduct = (id) => {
    const token = getUserToken();
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
export const UploadImage = (data) => {
    const name = "dxzlnojyv";
    return instance.post(
        `https://api.cloudinary.com/v1_1/${name}/image/upload`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            },
        }
    );
}