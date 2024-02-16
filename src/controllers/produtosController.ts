// // src/controllers/produtosController.ts
// import { Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function getProdutos(req: Request, res: Response): Promise<void> {
//     try {
//         const produtos = await prisma.produto.findMany();
//         res.json(produtos);
//     } catch (error) {
//         console.error('Erro ao obter produtos:', error);
//         res.status(500).json({ error: 'Erro ao obter produtos' });
//     }
// }

// export async function criarProduto(req: Request, res: Response): Promise<void> {
//     const { nome, categoria, preco, quantidade_estoque } = req.body;
//     try {
//         const produto = await prisma.produto.create({
//             data: {
//                 nome,
//                 categoria,
//                 preco,
//                 quantidade_estoque
//             }
//         });
//         res.json(produto);
//     } catch (error) {
//         console.error('Erro ao criar produto:', error);
//         res.status(500).json({ error: 'Erro ao criar produto' });
//     }
// }
