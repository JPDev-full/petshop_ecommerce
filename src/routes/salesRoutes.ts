import express from "express";
import * as salesController from '../controllers/salesController';
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();


router.post('/sale', authenticateToken, salesController.createSale);
router.get('/list-sale', authenticateToken, salesController.createSale);
router.get('/:id', authenticateToken, salesController.createSale);
router.put('/:id', authenticateToken, salesController.createSale);
router.delete('/:id', authenticateToken, salesController.createSale);

export default router;
