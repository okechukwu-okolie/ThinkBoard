import express from 'express'
import { deleteNewNote, editNewNote, getAllNotes, getOneNote, postNewNote } from '../controllers/noteController.js'

const pathway = express.Router()

pathway.get('/',getAllNotes)
pathway.get('/:id',getOneNote)
pathway.post('/',postNewNote)
pathway.put('/:id',editNewNote)
pathway.delete('/:id',deleteNewNote)



export default pathway