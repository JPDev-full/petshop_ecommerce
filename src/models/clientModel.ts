import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export interface Clients {
  id_clients?: string;
  name: string;
  cpf: string; // Alterado para string
  email: string;
  phone: number;
  password: string;
}

export async function createClient(clientData: Clients) {
  const hashedPassword = await bcrypt.hash(clientData.password, 10);
  const { id_clients, ...data } = clientData;
  return await prisma.clients.create({ 
    data: {
      ...data,
      id_clients: id_clients || uuidv4(),
      password: hashedPassword,
    }
  });
}

export async function getClienteById(id: string) {
  return await prisma.clients.findUnique({ 
    where: { id_clients: id }
  });
}

export async function updateCliente(id: string, clientData: Clients) {
  const { id_clients, ...data } = clientData;
  return await prisma.clients.update({ 
    where: { id_clients: id },
    data: data
  });
}

export async function deleteCliente(id: string) {
  return await prisma.clients.delete({
    where: { id_clients: id }
  });
}

export async function getAllClientes() {
  return await prisma.clients.findMany();
}
