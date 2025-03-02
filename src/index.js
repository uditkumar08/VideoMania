import dotenv from "dotenv"
import {app} from "./app.js"
import connectDb from "./db/index.js"
dotenv.config({
    path: "./.env"
})
const PORT = process.env.PORT || 7000
connectDb()
.then(()=>{
    app.listen(PORT, () =>{
            console.log(`Sever is running on port ${PORT}`);         
})
})
.catch((err)=>{ 
    console.log(`MongoDB connection error` ,err);
    
})

// 
// app.listen(PORT, () =>{
//     console.log(`Sever is running on port ${PORT}`);  
// 
    
// })
