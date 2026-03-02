import mongoose from 'mongoose'
import NewNotes from '../models/notes.js'

export const getAllNotes = async(req,res)=>{
    try {
        const allNotes = await NewNotes.find()
        if(allNotes.length === 0) return res.json({message:'There is no note to retrieve'})
        console.log(allNotes)
        res.status(200).json({message:'data retrieved successfully'})
    } catch (error) {
        console.log('there was an error getting all the notes')
    }
}



export const postNewNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        // 1. Validation check
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required.' });
        }

        const newPost = new NewNotes({ title, content });
        await newPost.save();

        // 2. Status code 201 is more accurate for creation
        res.status(201).json({ 
            message: 'The post was successfully made.', 
            data: newPost 
        });

    } catch (error) {
        // 3. Log the actual error for debugging
        console.error('Error posting the new note:', error);

        // 4. Ensure a response is ALWAYS sent back to the client
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const editNewNote = async(req,res)=>{
    try {
        const {title,content} = req.body
        const editedNote = await NewNotes.findByIdAndUpdate(req.params.id,{title,content})
        if(!editedNote)return res.status(404).json({message:'Note not found'})
        res.status(200).json({message:'content updated sucessfully'})
    } catch (error) {
        console.error('error posting the new note',error)
    }
}

export const deleteNewNote = async(req,res)=>{
     try {
        const {title,content} = req.body
        await NewNotes.findByIdAndDelete(req.params.id,{title,content})
        res.status(200).json({message:'content deleted sucessfully'})
    } catch (error) {
        console.error('error posting the new note',error)
    }
}