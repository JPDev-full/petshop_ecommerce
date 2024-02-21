import express, { Application } from "express";
import clientesRoutes from "./clientsRoutes";
import productsRoutes from "./productsRoutes";
import salesRoutes from "./salesRoutes";

const router = express.Router();

export function routes(app: Application) {
  app.use("/api/clients", clientesRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/sales", salesRoutes);
}

export default router;
