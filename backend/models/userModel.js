//define the model
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
    //save anything else here like chat logs ect
}, {minimize:false})

const userModel = mongoose.model.user || mongoose.model("user", userSchema); //if model not created create it
export default userModel; //export it for use