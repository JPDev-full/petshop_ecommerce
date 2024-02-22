import express from "express";
import * as clientesController from "../controllers/clientsController";
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.get("/", clientesController.getAllClients);
router.get("/:id", authenticateToken, clientesController.getClientById);
router.put("/:id", authenticateToken, clientesController.updateClient);

export default router;
