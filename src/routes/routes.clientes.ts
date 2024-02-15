// src/routes/clientes.ts
import express from "express";
// import { getClientes, postCliente } from "../controllers/clientesController";
import { authenticateToken } from "../middleware/authentication";

const router = express.Router();

// router.get("/", authenticateToken, getClientes);
// router.post("/", authenticateToken, postCliente);

export default router;
