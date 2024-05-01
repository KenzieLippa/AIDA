import express from "express"
import cors from "cors"


//app config
//init the app with express
const app = express()
//define the port number
const port = 4000

//middleware //request parsed with json
app.use(express.json())
app.use(cors()) //can access the backend from the front end

//http method so we can request the data from the server
app.get("/", (req, res)=>{
    res.send("API WORKING") //send the response
})

app.listen(port, ()=>{
    //call back function
    console.log(`Server started on http://localhost:${port}`)
})