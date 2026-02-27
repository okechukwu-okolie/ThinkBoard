import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()



export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully')

  } catch (error) {
    console.error('There is an error connecting to mongodb')
    process.exit(1)//this means exiting with failure
  }
}; 
