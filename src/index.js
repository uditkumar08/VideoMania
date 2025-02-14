import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config({
    path: "./'env"
})
const PORT = process.env.PORT || 7000
app.listen(PORT, () =>{
    console.log(`Sever is running on port ${PORT}`);
    
})
