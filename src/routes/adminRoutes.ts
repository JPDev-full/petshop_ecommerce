import express from "express";
import * as usersController from "../controllers/usersController";
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.post("/", usersController.createAdmin);

export default router;
