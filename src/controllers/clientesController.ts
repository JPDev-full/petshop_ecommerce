// src/controllers/clientesController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getClientes(req: Request, res: Response): Promise<void> {
    try {
        const clientes = await prisma.clientes.findMany();
        res.json(clientes);
    } catch (error) {
        console.error('Erro ao obter clientes:', error);
        res.status(500).json({ error: 'Erro ao obter clientes' });
    }
}

export async function postCliente(req: Request, res: Response): Promise<void> {
    const { nome, cpf, email, endereco, telefone } = req.body;
    try {
        const cliente = await prisma.cliente.create({
            data: {
                nome,
                cpf,
                email,
                endereco,
                telefone
            }
        });
        res.json(cliente);
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
}    
    
