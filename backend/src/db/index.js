import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async()=>{
try {
    //connection to be made
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`MONGODB CONNECTED SUCCESSFULLY || DB HOST ${connectionInstance.connection.host}`);

} catch (error) {
    console.log("mongodb failed to connect",error);
    process.exit(1);
}}

export default connectDB;








