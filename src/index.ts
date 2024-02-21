// index.ts
import express from "express";
import { routes } from "./routes/routes";
const app = express();
const PORT = 3000;
import path from "path";

app.use(express.json());
routes(app);

app.use(express.static(path.join(__dirname, "views", "home")));
app.use(express.static(path.join(__dirname, "views", "login")));

app.use((req: any, res: any, next: any) => {
  if (req.url === "/") {
    res.redirect("/home");
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
