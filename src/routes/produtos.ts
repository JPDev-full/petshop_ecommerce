// src/routes/produtos.ts
import express from 'express';
import { getProdutos, criarProduto } from '../controllers/produtosController';
import { authenticateToken } from '../middleware/authentication';

const router = express.Router();

router.get('/', authenticateToken, getProdutos);
router.post('/', authenticateToken, criarProduto);

export default router;
