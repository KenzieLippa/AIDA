import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user
const loginUser = async (req,res) =>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email})

        if(!user){
            //no user
            return res.json({success:false,message:"Email or Password is incorrect"})

        }
        //if the password entered is in the database then is found
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Email or Password is incorrect"})
        }

        //if correct gen a token
        const token =createToken(user._id);
        //send as a response
        res.json({success:true, token})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"ERROR"})
    }
}
const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
//register user
const registerUser = async(req,res)=>{
    //allow to register on website
    const {name, password, email} = req.body;
    try{
        //checking if user already exists
        const exists = await userModel.findOne({email})
        if (exists){
            return res.json({success:false,message:"User already exists!"})
        }
        //validate the email and strong password format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        //at this point email is prob valid
        if(password.length <8){
            return res.json({success:false, message:"Please enter a longer password"})
        }
        //create an account

        //first we need to encript the password
        //hashing the user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create new user
        const newUser  = new userModel({
            name:name,
            email:email,
            password:hashedPassword
            //add more as needed
        })

        //save the user in db
        const user = await newUser.save() //needs reference to user to save

        //need a token 
        const token = createToken(user._id)
        //save as a response
        res.json({success:true,token})

    }catch(error){
        console.log(error);
        res.json({success:false,message:"ERROR OCCURED"})
    }
}
export {loginUser,registerUser}