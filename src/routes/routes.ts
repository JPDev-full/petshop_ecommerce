import clientsRoutes from "./routes.clientes";
import productsRoutes from "./routes.produtos";
import salesRoutes from "./routes.vendas";
import path from "path";

export function routes(app: any) {
  app.use("/api/clients", clientsRoutes);

  app.use("/api/products", productsRoutes);

  app.use("/api/sales", salesRoutes);

  app.get("/home", (_: any, response: any) => {
    response.sendFile(path.resolve("src/views/home/home.html"));
  });

  app.get("/login", (_: any, response: any) => {
    response.sendFile(path.resolve("src/views/login/login.html"));
  });
}
