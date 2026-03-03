import mongoose from "mongoose"
import Note from "./models/Note.js"


 export const getAllData = async(req,res)=>{
    try{
        
        const allData = await Note.find()
        if(!allData || allData.length === 0)return res.status(404).json({message:'No data found'})
        res.status(200).json({message:'all data retrieved successfully'})
    }catch(err){
        console.error('Error retrieving data:', err)
        res.status(500).json({message:'Internal server error'})

    }
 }

 export const getOneData = async(req,res)=>{
    try {
        const oneData = await Note.findById(req.params.id)
        if(!oneData)return res.status(404).json({message:'Data not found'})
            res.status(200).json({message:'Data retrieved successfully'})
    } catch (error) {
        console.error('Error retrieving data:', error)
        res.status(500).json({message:'Internal server error'})
    }
 }

 export const postData =async(req,res)=>{
    try {
        const{title,content} = req.body
        if(!title || !content)return res.status(404).json({message:'Title and content are required'})
        const createdData = await Note({title,content})
        await createdData.save()
        res.status(200).json({message:'Data created successfully'})
    } catch (error) {
        console.error('Error creating data:', error)
        res.status(500).json({message:'Internal server error'})
    }
 }
    

 export const updateDate = async(req,res)=>{
    try {
        const {title,content} = req.body
        if(!title || !content)return res.status(404).json({message:'Title and content are required'})
        const updatedData = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedData)return res.status(404).json({message:'Data not found'})
        res.status(200).json({message:'Data updated successfully'})
    } catch (error) {
        console.error('Error updating data:', error)
        res.status(500).json({message:'Internal server error'})
    }
 }

    export const deleteData = async(req,res)=>{}
    try {
        const deletedData = await Note.findByIdAndDelete(req.params.id)
        if(!deletedData)return res.status(404).json({message:'Data not found'})
        res.status(200).json({message:'Data deleted successfully'})
    } catch (error) {
        console.error('Error deleting data:', error)
        res.status(500).json({message:'Internal server error'})
    }
 