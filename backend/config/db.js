//logic to connect with the database
import mongoose from "mongoose";

export const connectDB = async () =>{
    (await mongoose.connect('mongodb+srv://roseycat7:314159265@cluster0.tnpmlof.mongodb.net/AIDA')).isObjectIdOrHexString(()=>console.log("DB CONNECTED"));

}