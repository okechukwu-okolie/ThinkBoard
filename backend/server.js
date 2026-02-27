import express from 'express'
import notesRoutes from './src/routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()


const port = process.env.PORT || 5001
const app = express()

//the database shuld be defined before the routes because the routes will have to source from the database
connectDB()



app.use('/api/notes',notesRoutes)



//middleware
app.use(express.json())







app.listen(5001,()=>{
    console.log('The server is running on PORT:', port)
})

