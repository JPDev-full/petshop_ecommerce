// src/routes/clientes.ts
import express from 'express';
import { getClientes } from '../controllers/clientesController';
import { authenticateToken } from '../middleware/authentication';

const router = express.Router();

router.get('/', authenticateToken, getClientes);
router.post('/', authenticateToken, postClient);

export default router;
