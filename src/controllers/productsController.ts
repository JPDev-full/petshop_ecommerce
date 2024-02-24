import { Request, Response } from "express";
import * as productModel from "../models/productsModel";

export async function getAllProducts(_: Request, res: Response) {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching products" });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, category, price, stock_quantity } = req.body;
    if (!name || !category || !price) {
      res.status(400).json({ error: "Name, category and price are required" });
    }
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
    const productId = Number(id);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const product = await productModel.getProductById(productId);
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
    const productId = Number(id);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const { name, category, price, stock_quantity } = req.body;
    if (!name || !category || !price || !stock_quantity) {
      return res
        .status(400)
        .json({
          error: "Name, category, price, and stock_quantity are required",
        });
    }
    const updatedProduct = await productModel.updateProduct(productId, {
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
    const productId = Number(id);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    await productModel.deleteProduct(productId);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting product" });
  }
}
