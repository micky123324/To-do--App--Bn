import mongoose from "mongoose";
import  config  from './env.js';
const connectDB= async() =>{
    try{
        const conn= await mongoose.connect(config.mongodbUri,{
            useNewUrlparser:true,
            useUnifiedTopology:true,

        });
        console.log("connect".conn)
        console.log('mongoDB connected:${conn.connection.host}');
        return conn;
    }catch (error){
        console.error(`mongodb connection error:,error`);
        process.exit(1);// exit the process with failure
    }
}
