import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Adress {
    id_clients?: string;
    street: string;
    city: string;
    state: string;
    cep: number;
};

export async function createAdress(addressData: Adress){
    const {id_clients, ...data} = addressData;
    return await prisma.address.create({data});
};

export async function getAllAddress(){
    return await prisma.address.findMany();
};

export async function getAddressByID(id: string) {
    return await prisma.address.findUnique({ 
      where: { id_address: id }
    });
};

export async function getAddressByClientId(clientId: number){
    return await prisma.address.findMany({
      where: { clientId },
    });
};

export async function updateAddress (id: string, addressData: Adress){
    const {id_clients, ...data} = addressData;
    return await prisma.address.update({ 
        where: { id_clients: id },
        data: data
      });
};

export async function deleteAddress (id: number){
    return await prisma.address.delete({
        where: { id_produto: id }
      });
};
