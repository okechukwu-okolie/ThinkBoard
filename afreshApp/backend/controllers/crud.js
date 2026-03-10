import mongoose from 'mongoose';
import Crud from '../model/crudModel.js';


export const getAll = async(req,res)=>{
    try{
        const allItems = await Crud.find().sort({ createdAt: -1 });
        res.status(200).json(allItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createItem = async(req,res)=>{
    try{
        const newItem = await Crud.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}