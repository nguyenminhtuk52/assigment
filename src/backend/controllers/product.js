import Product from "../models/product";
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Thêm không thành công"
        })
    }
}
export const list = async (req,res)=>{
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message:"Them Khong thanh cong"
        })
    }
}
export const read = async (req,res)=>{
    try {
        const product = await Product.findOne({_id:req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message:"Tim Khong thanh cong"
        })
    }
}
export const remove = async (req,res)=>{
    try {
        const product = await Product.findOneAndDelete({_id:req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message:"Xoa Khong thanh cong"
        })
    }
}
export const update = async (req,res)=>{
    const {name,price,image,description}=req.body;
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id},{name,price:+price,image,description}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message:"Update Khong thanh cong"
        })
    }
}
