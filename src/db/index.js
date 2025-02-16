import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
    try{
        const MONGO_URI = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const connectionInstance = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

     console.log(`\n MongoDB connected ! DB host : 
        ${connectionInstance.connection.host}`);
     
    }catch(error){
        console.log("MongoDb Connection error ", error);
        process.exit(1);
    }
}
export default connectDb