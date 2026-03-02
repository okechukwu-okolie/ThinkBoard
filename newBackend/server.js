import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { database } from './config/db.js'
import pathway from './routes/pathway.js'

const app = express()




//middleware
app.use(express.json())
app.use('/api/notes',pathway)

database(process.env.mongo_key)

const port = process.env.port || 5600
app.listen(port,()=>{
    console.log('the server is running on port', port)
})