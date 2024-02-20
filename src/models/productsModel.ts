import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Products {
  id_produto?: number;
  nome: string;
  categoria: string;
  preco: number;
  quantidade_estoque: number;
}

export async function createProduct(productData: Products) {
  const { id_produto, ...data } = productData;
  return await prisma.produto.create({ 
    data: {
      ...data,
    }
  });
}

export async function getAllProducts() {
  return await prisma.produto.findMany();
}

export async function getProductById(id: number) {
  return await prisma.produto.findUnique({ 
    where: { id_produto: id }
  });
}

export async function updateProduct(id: number, productData: Products) {
  const { id_produto, ...data } = productData;
  return await prisma.produto.update({ 
    where: { id_produto: id },
    data: data
  });
}

export async function deleteProduct(id: number) {
  return await prisma.produto.delete({
    where: { id_produto: id }
  });
}