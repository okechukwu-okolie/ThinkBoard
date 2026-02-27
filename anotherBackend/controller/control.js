import mongoose from 'mongoose'
import NoteData from '../model/dataSchema.js'


export const getAllData = async(req,res)=>{
 
    try{
        const getAllData = await NoteData.find()
        console.log('****************************************')
        console.log(getAllData)
         console.log('****************************************')
          console.log('****************************************')
        res.status(200).json({
            message:'The posts have been successfully retrieved.'
        })
    }catch(err){
        res.status(500).json({
            message:'There is an error with getting all the data.'
        })
    }
}



 

export const postAll = async (req, res) => {
    try {
        const { title, content } = req.body;

        // 1. Validation: Check if the required data exists in the request body
        if (!title || !content) {
            return res.status(400).json({
                message: 'Validation failed: Title and content are required.'
            });
        }

        // 2. Logic: Create and save the new document
        const oneDataPost = new NoteData({ title, content });
        await oneDataPost.save();

        // 3. Success Response
        res.status(201).json({
            message: 'Data successfully added to the database.',
            data: oneDataPost // Good practice to return the created object
        });

    } catch (err) {
        // 4. Error Handling: Catch database or server issues
        console.error("Post Error:", err); // Log the error for debugging
        res.status(500).json({
            message: 'Error posting the data',
            error: err.message
        });
    }
};





export const putAll =async(req,res)=>{
    const{title,content}=req.body
    if(!title || !content) return res.status(404).json({message:'404 error detected'})
    try{
        await NoteData.findByIdAndUpdate(
        req.param.id,
        {title,content},
        {new:true}
    )
    res.status(200).json({
        message:'updated successfully'
    })
    }catch(err){
        res.status(500).json({
            message:'error editing the note'
        })
    }
}

export const deleteAll =async(req,res)=>{
   

   try{
    const deleteOne = await NoteData.findByIdAndDelete(req.params.id)
    if(!deleteOne)return res.status(400).json({message:'user input wrong ID'})

    res.status(200).json({
        message:'data successfully deleted'
    })
   }catch(err){
    res.status(500).json({
        message:'server based error'
    })
   }
}