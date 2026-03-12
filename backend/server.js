import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path'



import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();



const port = process.env.PORT || 5001;
const app = express();
const __dirname = 

//the database should be defined before the routes because the routes will have to source from the database

//middleware

//this allows for the reading of json files
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('Middleware executed')
//     next()
// })


//cors is necessay in development because of the different bcend and frtend ports
if(process.env.NODE_ENV !== 'production'){
  app.use(cors({
  origin:'http://localhost:5173/'
}));
}


//this is the rate limiting middleware
app.use(rateLimiter);



//routes
app.use("/api/notes", notesRoutes);


//this puts the front and backend in the same domain
if(process.env.NODE_ENV === 'production'){

  app.use(express.static(path.join(__dirname,'../frontend/dist')))

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend','dist','index.html'))
  })
}

//in this setup, the server will only start listening for
//  requests after a successful connection to the database is established. 
// If there is an error connecting to the database, it will be logged to the 
// console and the server will not start.
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("The server is running on PORT:", port);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });
