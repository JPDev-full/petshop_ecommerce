import express from "express"
import * as addressController from '../controllers/addressController';
import { authenticateToken } from "../middleware/authentication";


const router = express.Router();

router.post('/createAddress', authenticateToken, addressController.createAddress);
// router.get('/', authenticateToken, addressController.getAllAddress);
// router.get('/:id', authenticateToken, addressController.getAddressById);
// router.put('/:id', authenticateToken, addressController.updateAddress);
// router.delete('/:id', authenticateToken, addressController.deleteAddress);

export default router;