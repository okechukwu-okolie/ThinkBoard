import mongoose from 'mongoose'

const crud = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
    },
    composition:{
        type: String,
        required: true,
        trim:true,}
},
{timestamps:true}
)

const Crud = mongoose.model("Crud", crud)

export default Crud;