import express from 'express';
import { createItem, getAll } from '../controllers/crud.js';

const crudRoutes = express.Router();

crudRoutes.get('/', getAll);
crudRoutes.post('/', createItem);

export default crudRoutes;