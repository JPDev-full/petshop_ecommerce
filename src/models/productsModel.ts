import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Products {
  name: string;
  category: string;
  price: number;
  stock_quantity: number;
}

export async function createProduct(productData: Products) {
  const { ...data } = productData;
  return await prisma.products.create({
    data: {
      ...data,
    },
  });
}

export async function getAllProducts() {
  return await prisma.products.findMany();
}

export async function getProductById(id: number) {
  return await prisma.products.findUnique({
    where: { id_product: id },
  });
}

export async function updateProduct(id: number, productData: Products) {
  const { ...data } = productData;
  return await prisma.products.update({
    where: { id_product: id },
    data: data,
  });
}

export async function deleteProduct(id: number) {
  return await prisma.products.delete({
    where: { id_product: id },
  });
}
