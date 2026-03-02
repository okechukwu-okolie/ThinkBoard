import mongoose from 'mongoose'

const newNotes = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true}
)

const NewNotes = mongoose.model('NewNotes', newNotes)

export default NewNotes