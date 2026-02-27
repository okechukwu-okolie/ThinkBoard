import Note from "../../models/Note.js";

export const getAll = async (req, res) => {
  try {
    const Notes = await Note.find(); 
    res.status(200).json({ message: "all notes delivered" });
  } catch (error) {
    console.error("Error in the getAll controller", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const postAll = async (req, res) => {
  try {
    //destructure title and content from the body
    const { title, content } = req.body;

    //create an instance of the schema and place it in newNote,
    //  filing the key of title and content with title and content 
    // from the body
    const newNote =  new Note({title, content})


    //the instance is updated with the new information
    await newNote.save()

    //report status for success
    res.status(200).json({message:'note created successfully!!!'})
  } catch (error) {
    res.status(500).json({message:'there was some form of error'})
  }
};

export const putAll = (req, res) => {
  res.status(200).json({
    message: "The post has been successfully updated",
  });
};

export const deleteAll = (req, res) => {
  res.status(200).json({
    message: "The message has been deleted.",
  });
};

//highlight the followng titles if there are in the list: The Phantom of the Opera, Chicago, Starlight Express, Chitty Chitty Bang Bang, The Lion in Winter, Follies, Cats
//excluding the following:The Phantom of the Opera, Chicago, Starlight Express, Chitty Chitty Bang Bang, The Lion in Winter, Follies, Cats
//musicals and shows excluding those in the list provided in this query
