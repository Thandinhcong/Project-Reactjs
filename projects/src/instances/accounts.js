import instance from "./instances"

export const Signup = (data) => {
    const uri = "/signup"
    return instance.post(uri, data)
}
export const FormSignin = (data) => {
    const uri = "/signin"
    return instance.post(uri, data)
}
export const ListOneUser = (id) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const ListUsers = () => {
    const uri = "/users"
    return instance.get(uri)
}

export const updateUser = (id, users) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "admin") {
        alert("Khong the cap nhat tai khoan nay")
        return false;
    }
    const uri = "/users/" + id;
    return instance.put(uri, users);
}