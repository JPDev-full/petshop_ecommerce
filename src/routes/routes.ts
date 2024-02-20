import express, { Application } from 'express';
import clientesRoutes from "./routes.clientes";
import productsRoutes from "./routes.produtos";
import salesRoutes from "./routes.vendas";

const router = express.Router();

export function routes(app: Application) {
  app.use("/api/clients", clientesRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/sales", salesRoutes);
}

export default router;
