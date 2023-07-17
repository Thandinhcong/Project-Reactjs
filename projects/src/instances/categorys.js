import getUserToken from "./getUserToken"
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
    const token = getUserToken();
    const uri = "/categorys/"
    return instance.post(uri, cate, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}
export const deletetCate = (id) => {
    const token = getUserToken();
    const uri = "/categorys/" + id
    return instance.delete(uri, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}
export const updateCate = (id, cate) => {
    const token = getUserToken();
    const uri = "/categorys/" + id
    return instance.put(uri, cate, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}




