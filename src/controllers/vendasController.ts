// src/controllers/vendasController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criarVenda(req: Request, res: Response): Promise<void> {
    const { id_cliente, id_produto, quantidade, total } = req.body;
    try {
        const venda = await prisma.venda.create({
            data: {
                id_cliente,
                id_produto,
                quantidade,
                total
            }
        });
        // Atualizar a quantidade em estoque do produto
        await prisma.produto.update({
            where: {
                id: id_produto
            },
            data: {
                quantidade_estoque: {
                    decrement: quantidade
                }
            }
        });
        res.json(venda);
    } catch (error) {
        console.error('Erro ao criar venda:', error);
        res.status(500).json({ error: 'Erro ao criar venda' });
    }
}
