import mongoose from "mongoose";
const productCateGory = new mongoose.Schema({
    name: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    image: String,
},
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", productCateGory);
