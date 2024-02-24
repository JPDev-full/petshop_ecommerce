import express from "express"
import * as addressController from '../controllers/addressController';
import { authenticateToken } from "../middleware/authentication";


const router = express.Router();

router.post('/',addressController.createAddress);
router.get('/', authenticateToken ,addressController.getAllAddress);
router.get('/:id', authenticateToken ,addressController.getAddressById);
router.get('/client/:id', authenticateToken, addressController.getAddressByClientId);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);

export default router;