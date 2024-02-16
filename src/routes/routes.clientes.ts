import express from 'express';
import * as clientesController from '../controllers/clientesController';
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.post('/', authenticateToken, clientesController.createClient);
router.get('/', authenticateToken, clientesController.getAllClients);
router.get('/:id', authenticateToken, clientesController.getClientById);
router.put('/:id', authenticateToken, clientesController.updateClient);
router.delete('/:id', authenticateToken, clientesController.deleteClient);

export default router;
