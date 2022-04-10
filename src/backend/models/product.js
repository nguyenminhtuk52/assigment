import mongoose, {Schema} from "mongoose";
const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    ,
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamp:true});
export default mongoose.model('Product',productSchema)