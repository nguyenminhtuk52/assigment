import User from '../models/user';
// import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const {name, email,password} = req.body
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        const user = new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    
}