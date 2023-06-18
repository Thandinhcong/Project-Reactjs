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