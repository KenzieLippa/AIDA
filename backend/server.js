import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

//app config
//init the app with express
const app = express()
//define the port number
const port = 4000

//middleware //request parsed with json
app.use(express.json())
app.use(cors()) //can access the backend from the front end

//db connection
connectDB()


//api endpoints
app.use("/api/user",userRouter)
//http method so we can request the data from the server
app.get("/", (req, res)=>{
    res.send("API WORKING") //send the response
})

app.listen(port, ()=>{
    //call back function
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://roseycat7:314159265@cluster0.tnpmlof.mongodb.net/?