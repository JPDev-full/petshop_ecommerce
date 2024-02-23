// src/controllers/productsController.ts
import { Request, Response } from "express";
import * as productModel from "../models/productsModel";

export async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching products" });
  }
}

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, category, price, stock_quantity } = req.body;
    const newProduct = await productModel.createProduct({
      name,
      category,
      price,
      stock_quantity,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await productModel.getProductById(Number(id));
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching product" });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, category, price, stock_quantity } = req.body;
    const updatedProduct = await productModel.updateProduct(Number(id), {
      name,
      category,
      price,
      stock_quantity,
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating product" });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await productModel.deleteProduct(Number(id));
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting product" });
  }
}
