import instance from "./instances"

export const Signup = (data) => {
    const uri = "/signup"
    return instance.post(uri, data)
}
export const Signin = (data) => {
    const uri = "/signin"
    return instance.post(uri, data)
}