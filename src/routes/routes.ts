import clientsRoutes from "./routes.clientes";
import productsRoutes from "./routes.produtos";
import salesRoutes from "./routes.vendas";

export function routes(app: any) {
  app.use("/api/clients", clientsRoutes);

  app.use("/api/products", productsRoutes);

  app.use("/api/sales", salesRoutes);
}
