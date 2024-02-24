import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Sales {
  client_id: number;
  product_id: number;
  quantity: number;
  total_amount: number;
}

export async function createSale(saleData: Sales) {
  const { ...data } = saleData;
  return await prisma.sales.create({
    data: {
      ...data,
    },
  });
}

export async function getAllSales() {
  return await prisma.sales.findMany();
}

export async function getSaleById(id: number) {
  return await prisma.sales.findUnique({
    where: { id_sale: id },
  });
}

export async function updateSale(id: number, saleData: Sales) {
  const { ...data } = saleData;
  return await prisma.sales.update({
    where: { id_sale: id },
    data: data,
  });
}

export async function deleteSale(id: number) {
  return await prisma.sales.delete({
    where: { id_sale: id },
  });
}