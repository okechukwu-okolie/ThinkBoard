import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
    title:{
        type :String,
        required:true,
        trim:true,
    },
    content:{
        type :String,
        required:true,
    }
},
{timestamps:true}
)


const NoteData = mongoose.model('NoteData',dataSchema)

export default NoteData

