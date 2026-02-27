import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },

},{timestamps:true}// createdAt , updatedAt
)
    


//the mongoose model is the actual mongoose method that is responsible for making the model, however, it requires a schema, hence the mongoose schema.
const Note = mongoose.model("Note", noteSchema)


//this statement exports the model method from the mongoose library
export default Note