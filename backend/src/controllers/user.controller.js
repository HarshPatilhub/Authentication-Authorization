import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password} = req.body;

    const userExist  = await User.findOne({email})

    if (userExist) {
        throw new ApiError(409, "user already existed")
    }

    const user = await User.create({
        username,
        email,
        password,
    })

    if (user) {
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            }
        });
    }
    
});

 const loginUser = asyncHandler (async (req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }
     if(user && (await user.matchPassword(password))) {
        return res.status(201).json(
            {
                message: "User Login Successfully",
                user: {
                    _id: user.id,
                    email: user.email,
                    password: user.password,
                    token: generateToken(user._id)
                }
         }
        )
     }

 });




export {registerUser ,loginUser}
