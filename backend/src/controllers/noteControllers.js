import Note from "../../models/Note.js";

export const getAll = async (req, res) => {
  try {
    const Notes = await Note.find(); 
    console.log(Notes)
    res.status(200).json(Notes);
    // res.status(200).json({ message: "all notes delivered" });
  } catch (error) {
    console.error("Error in the getAll controller", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getOneNote = async (req, res) => {
    try {
        // CORRECTION: Use req.params.id (plural 'params')
        const getSingleNote = await Note.findById(req.params.id); 
        
        if (!getSingleNote) {
            return res.status(404).json({ message: 'Note does not exist' });
        }
        
        res.json(getSingleNote);
    } catch (error) {
        console.error('Error getting the note:', error);
        // CORRECTION: Send a 500 status so the frontend knows something went wrong
        res.status(500).json({ message: 'Server error fetching note' }); 
    }
}

export const postAll = async (req, res) => {
  try {
    //destructure title and content from the body
    const { title, content } = req.body;  

    //create an instance of the schema and place it in newNote,
    //  filing the key of title and content with title and content 
    // from the body
    const newNote =  new Note({title, content})

    console.log(newNote)
    //the instance is updated with the new information
    await newNote.save()

    //report status for success
    res.status(200).json({message:'note created successfully!!!'})
  } catch (error) {
    res.status(500).json({message:'there was some form of error'})
  }
};


// export const putAll =async(req,res)=>{
//     const{title,content}=req.body
//     if(!title || !content) return res.status(404).json({message:'404 error detected'})
//     try{
//         await Note.findByIdAndUpdate(
//         req.params.id,
//         {title,content},
//         {new:true}
//     )
//     res.status(200).json({
//         message:'updated successfully'
//     })
//     }catch(err){
//         res.status(500).json({
//             message:'error editing the note'
//         })
//     }
// }


export const putAll = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params; // Corrected from req.param

    // 1. Validation for missing fields (400 is more accurate than 404 here)
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, content },
            { new: true, runValidators: true } // Added runValidators for safety
            
        );

        // 2. Check if the note actually existed
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({
            message: 'Updated successfully',
            data: updatedNote // It's usually helpful to return the updated object
        });

    } catch (err) {
        // 3. Handle potential CastError (invalid ID format)
        res.status(500).json({
            message: 'Error editing the note',
            error: err.message
        });
    }
};

export const deleteAll =async(req,res)=>{
   

   try{
    const deleteOne = await Note.findByIdAndDelete(req.params.id)
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