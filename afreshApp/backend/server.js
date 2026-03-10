import express from 'express';
import dotenv from 'dotenv'
import connectDatabase from './config/db.js';
import crudRoutes from './routes/crudRoutes.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5050


app.use(express.json())

app.use('/api/crud',crudRoutes)


connectDatabase().then((()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}))


