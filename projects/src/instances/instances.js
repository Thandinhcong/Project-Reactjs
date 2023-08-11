import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.PORT,
    headers: {
        "Content-Type": "application/json",
    }
})
export default instance;