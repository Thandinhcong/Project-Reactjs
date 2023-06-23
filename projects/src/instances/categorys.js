import instance from "./instances"

export const ListCates = () => {
    const uri = "/categorys"
    return instance.get(uri)
}
export const ListOneCate = (id) => {
    const uri = "/categorys/" + id
    return instance.get(uri)
}
export const addCate = (cate) => {
    const uri = "/categorys/"
    return instance.post(uri, cate)
}
export const deletetCate = (id) => {
    const uri = "/categorys/" + id
    return instance.get(uri)
}
export const updateCate = (id, cate) => {
    const uri = "/categorys/" + id
    return instance.put(uri, cate)
}
// Hàm để lấy danh sách sản phẩm trong danh mục
export const getCategoryProducts = async (categoryID) => {
    try {
        const response = await instance.get(`/categorys/${categoryID}/products`);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch category products');
    }
};



