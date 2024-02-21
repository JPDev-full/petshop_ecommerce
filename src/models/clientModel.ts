import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export interface Clients {
  clientId?: string;
  name: string;
  cpf: string; // Alterado para string
  email: string;
  phone: number;
}

export async function createClient(clientData: Clients) {
  const { clientId, ...data } = clientData;
  return await prisma.clients.create({
    data: {
      ...data,
      id_client: clientId || uuidv4(),
    },
  });
}

export async function getClienteById(id: string) {
  return await prisma.clients.findUnique({
    where: { id_client: id },
  });
}

export async function updateCliente(id: string, clientData: Clients) {
  const { clientId, ...data } = clientData;
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
