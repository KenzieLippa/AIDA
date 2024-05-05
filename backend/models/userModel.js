//define the model
import mongoose from "mongoose"
// const messagesSchema = new mongoose.Schema({
//     content:{type: String, required:true},
//     isBot:{type:Boolean, default:false}
// });

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    // messages:[messagesSchema]
    //save anything else here like chat logs ect
}, {minimize:false})

const userModel = mongoose.model.user || mongoose.model("user", userSchema); //if model not created create it
export default userModel; //export it for use