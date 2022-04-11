import mongoose, { Schema } from "mongoose";
import category from '../models/category';
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cateId:{
        type:Schema.Types.ObjectId,
        ref:category
    }
}, { timestamps: true });
export default mongoose.model("Product", productSchema);