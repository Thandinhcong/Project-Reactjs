import instance from "./instances"

export const Signup = (data) => {
    const uri = "/signup"
    return instance.post(uri, data)
}
export const FormSignin = (data) => {
    const uri = "/signin"
    return instance.post(uri, data)
}
export const ListUsers = () => {
    const uri = "/users"
    return instance.get(uri)
}