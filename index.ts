// index.ts
import express from 'express';
import clientesRoutes from './src/routes/clientes';
import produtosRoutes from './src/routes/produtos';
import vendasRoutes from './src/routes/vendas';
import prisma from './prisma'; // Importe o prisma aqui

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);
app.use('/vendas', vendasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
