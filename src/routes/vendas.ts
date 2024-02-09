// src/routes/vendas.ts
import express from 'express';
import { criarVenda } from '../controllers/vendasController';
import { authenticateToken } from '../middleware/authentication';

const router = express.Router();

router.post('/', authenticateToken, criarVenda);

export default router;
