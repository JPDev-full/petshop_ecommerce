import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Clients {
  name: string;
  cpf: string; // Alterado para string
  email: string;
  phone: number;
}

export async function createClient(clientData: Clients) {
  const { ...data } = clientData;
  return await prisma.clients.create({
    data: {
      ...data,
    },
  });
}

export async function getClienteById(id: string) {
  return await prisma.clients.findUnique({
    where: { id_client: id },
  });
}

export async function updateCliente(id: string, clientData: Clients) {
  const { ...data } = clientData;
  return await prisma.clients.update({
    where: { id_client: id },
    data: data,
  });
}

export async function deleteCliente(id: string) {
  return await prisma.clients.delete({
    where: { id_client: id },
  });
}

export async function getAllClientes() {
  return await prisma.clients.findMany();
}
