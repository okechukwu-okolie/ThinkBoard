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

export const getOneNote = async(req,res)=>{
    try{
    const getSingleNote = await NewNotes.findById(req.param.id)
    if(!getSingleNote) return res.status(404).json({message:'note does not exist'})
        res.json(getSingleNote)
    }catch(error){
        console.error('there was an error getting all the notes',error)
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


export const putAll =async(req,res)=>{
    const{title,content}=req.body
    if(!title || !content) return res.status(404).json({message:'404 error detected'})
    try{
        await Note.findByIdAndUpdate(
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