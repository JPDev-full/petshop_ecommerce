import express from "express";
import * as usersController from "../controllers/usersController";
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:id", authenticateToken, usersController.getUserById);
router.put("/:id", authenticateToken, usersController.updateUser);
router.delete("/:id", authenticateToken, usersController.deleteUser);

export default router;
