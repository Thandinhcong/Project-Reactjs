import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    numberPhone: {
        type: Number
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    date: {
        type: Date
    },
    password: {
        type: String,
        require: true
    }
    ,
    role: {
        type: String,
        default: "member"
    }
})
export default mongoose.model("User", userSchema);