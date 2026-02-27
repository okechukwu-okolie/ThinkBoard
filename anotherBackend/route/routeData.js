import express from 'express'
import { putAll, getAllData, postAll, deleteAll } from '../controller/control.js'

const route = express.Router()

route.get('/',getAllData)

route.post('/',postAll)

route.put('/:id',putAll)

route.delete('/:id',deleteAll)


export default route