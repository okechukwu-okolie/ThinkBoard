import express from 'express'
import { deleteAll, getAll, postAll, putAll } from '../controllers/noteControllers.js'
const router = express.Router()

//because the app.use() already has the common routes, we wont use it here
router.get('/',getAll)

router.post('/',postAll)

router.put('/:id',putAll)

router.delete('/:id',deleteAll)




export default router