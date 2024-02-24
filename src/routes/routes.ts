import express, { Application } from "express";
import clientesRoutes from "./clientsRoutes";
import productsRoutes from "./productsRoutes";
import salesRoutes from "./salesRoutes";
import usersRoutes from "./usersRoutes";
import adminRoutes from "./adminRoutes";
import addressRoutes from "./addressRoutes";
import loginRoute from "./loginRoute";

const router = express.Router();

export function routes(app: Application) {
  app.use("/api/clients", clientesRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/sales", salesRoutes);
  app.use("/api/users", usersRoutes);
  app.use(`/api/${process.env.ADMIN_URL}/users`, adminRoutes);
  app.use("/api/address", addressRoutes);
  app.use("/api/login", loginRoute);
}

export default router;
