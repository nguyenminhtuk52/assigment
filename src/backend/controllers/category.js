import Category from '../models/category';
import Product from '../models/product';

export const createe = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Thêm không thành công"
        })
    }
}
// export const readd = async (req, res) => {
//     const condition = {_id: req.params.id};
//     try {
//         const category = await Category.findOne({_id: req.params.id}).exec();
//         const products = await Product.find({category}).select('-category').exec();
//         res.json({
//             category, products
//         });
//     } catch (error) {
        
//     }
// }
export const readd = async (req,res)=>{
    try {
        const category = await Category.findOne({_id:req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message:"Tim Khong thanh cong"
        })
    }
}
export const listt = async (req,res)=>{
    try {
        const category = await Category.find().exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message:"Them Khong thanh cong"
        })
    }
}
export const removee = async (req,res)=>{
    try {
        const category = await Category.findOneAndDelete({_id:req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message:"Xoa Khong thanh cong"
        })
    }
}
export const updatee = async (req,res)=>{
    const {name}=req.body;
    try {
        const category = await Category.findOneAndUpdate({_id:req.params.id},{name}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message:"Update Khong thanh cong"
        })
    }
}