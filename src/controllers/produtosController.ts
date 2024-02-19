// src/controllers/produtosController.ts
import { Request, Response } from 'express';
import * as productModel from '../models/productsModel';

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        const produtos = await productModel.getAllProducts();
        res.json(produtos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching products' });
      }
}

export async function createProduct(req: Request, res: Response): Promise<void> {
    try {
    const { nome, categoria, preco, quantidade_estoque } = req.body;
    const newProduct = await productModel.createProduct({ nome, categoria, preco, quantidade_estoque });
    res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await productModel.getProductById(Number(id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching product' });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { nome, categoria, preco, quantidade_estoque } = req.body;
    const updatedProduct = await productModel.updateProduct(Number(id), {
      nome, categoria, preco, quantidade_estoque,
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating product' });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await productModel.deleteProduct(Number(id));
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting client' });
  }
}