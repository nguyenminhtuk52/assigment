import user from '../models/user';
import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const {  name,email, password } = req.body
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        const user = await new User({  name,email, password }).save();
        
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
        console.log(user);

    } catch (error) {
        res.status(400).json({
            message: "Đăng ky thất bại"
        })
    }
}
export const signin = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({_id: user._id}, "123456", { expiresIn: '1h'})
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}
export const listUser = async (req,res)=>{
    try {
        const user = await User.find().exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message:"Them Khong thanh cong"
        })
    }
}