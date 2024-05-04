import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"
import jwt from 'jsonwebtoken'
import User from './models/user';
//create a router
const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if (err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}
//end point to store messages
userRouter.post('/messages', async(req, res)=>{
    try{
        const{userId, text, isBot} = req.body;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        user.messages.push({text, isBot});
        await user.save()
        return res.status(201).json({message:'Message saved successfully'})

    }catch(error){
        console.error('Error saving message:', error)
        return res.status(500).json({message: 'Internal server error'})
    }
})
userRouter.get('/messages', authenticateToken, async (req, res) =>{
    try{
        const userId = req.user.id;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: 'user not found'})

        }
        return res.status(200).json({messages:user.messages})

    }catch(error){
        console.error('Error retrieving messages', error)
        return res.status(500).json({message: 'internal error'})
    }
})



export default userRouter;