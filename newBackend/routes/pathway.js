import express from 'express'
import { deleteNewNote, editNewNote, getAllNotes, postNewNote } from '../controllers/noteController.js'

const pathway = express.Router()

pathway.get('/',getAllNotes)
pathway.post('/',postNewNote)
pathway.put('/:id',editNewNote)
pathway.delete('/:id',deleteNewNote)



export default pathway