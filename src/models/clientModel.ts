import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Clients {
  name: string;
  cpf: string;
  phone: string;
}

export async function createClient(clientData: Clients) {
  return await prisma.clients.create({
    data: clientData,
  });
}

export async function getClienteById(id: number) {
  return await prisma.clients.findUnique({
    where: { id_client: id },
  });
}

export async function updateClient(id: number, clientData: Clients) {
  return await prisma.clients.update({
    where: { id_client: id },
    data: clientData,
  });
}

export async function deleteClient(id: number) {
  return await prisma.clients.delete({
    where: { id_client: id },
  });
}

export async function getAllClients() {
  return await prisma.clients.findMany();
}
