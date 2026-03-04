import express from "express";
import dotenv from "dotenv";
import cors from "cors";



import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();



const port = process.env.PORT || 5001;
const app = express();

//the database shuld be defined before the routes because the routes will have to source from the database

//middleware
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('Middleware executed')
//     next()
// })

//this is the rate limiting middleware
app.use(cors());
app.use(rateLimiter);




app.use("/api/notes", notesRoutes);

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
