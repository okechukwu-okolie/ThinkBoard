import mongoose from 'mongoose'

export const database = async(key)=>{
    try {
       await mongoose.connect(key)
        console.log('database connected successfully')
    } catch (error) {
        console.error('DATABASE DID NOT CONNECT SUCCESSFULLY',error)
    }
}