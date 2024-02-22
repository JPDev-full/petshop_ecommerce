import express from "express"
import * as addressController from '../controllers/addressController';
import { authenticateToken } from "../middleware/authentication";


const router = express.Router();

router.post('/createAddress', authenticateToken, addressController.createAddress);
router.get('/listAddress', authenticateToken, addressController.getAllAddress);
router.get('/listAddress/:id', authenticateToken, addressController.getAddressById);
router.get('/listAddress/client/:id', authenticateToken, addressController.getAddressByClientId);
// router.put('/:id', authenticateToken, addressController.updateAddress);
// router.delete('/:id', authenticateToken, addressController.deleteAddress);

export default router;