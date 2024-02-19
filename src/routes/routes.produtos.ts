// src/routes/produtos.ts
import express from "express";
import * as produtosController from '../controllers/produtosController';
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.post('/', authenticateToken, produtosController.createProduct);
router.get('/', authenticateToken, produtosController.getAllProducts);
router.get('/:id', authenticateToken, produtosController.getProductById)
router.put('/:id', authenticateToken, produtosController.updateProduct)
router.delete('/:id', authenticateToken, produtosController.deleteProduct)

export default router;
