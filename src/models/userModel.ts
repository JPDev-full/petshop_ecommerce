import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export interface Users {
  email: string;
  password: string;
  client_id?: number;
  isAdmin?: boolean;
}

export async function createUser(userData: Users) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const { client_id, isAdmin = false, ...data } = userData;
  return await prisma.users.create({
    data: {
      ...data,
      isAdmin,
      password: hashedPassword,
    },
  });
}

export async function getUserById(id: string) {
  return await prisma.users.findUnique({
    where: { id_user: id },
  });
}

export async function updateUser(id: string, userData: Users) {
  const { client_id, ...data } = userData;
  return await prisma.users.update({
    where: { id_user: id },
    data: {
      ...data,
    },
  });
}

export async function deleteUser(id: string) {
  return await prisma.users.delete({
    where: { id_user: id },
  });
}

export async function getAllUsers() {
  return await prisma.users.findMany();
}
