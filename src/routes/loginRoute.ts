import express from "express";
import * as login from "../controllers/loginController";
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

router.use("/", login.loginController);

export default router;
