import express from 'express'
import route from './route/routeData.js'
import { connectDatabase } from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()



const app =  express()  


const port = process.env.port  || 5002

//middleware
app.use(express.json());
app.use('/api/detail',route)

// app.get('/api/getData',(req,res)=>{
//     res.status(201).json({
//         message:'the data has all been gathered'
//     })
// })
connectDatabase(process.env.mongo_url,port)



app.listen(port,()=>{
    console.log('the server is currently working on port:',port)
})