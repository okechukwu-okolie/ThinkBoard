import mongoose from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config()

export const connectDatabase =async (key,port)=>{
    await mongoose.connect(key)
    console.log('the database is connected successfully and the server port is:',port)
}