import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface IAddress {
    id_clients?: string;
    street: string;
    city: string;
    state: string;
    cep: number;
};

export async function createAddress(addressData: IAddress){
    const { id_clients, ...data } = addressData;

    const existingAddress = await prisma.address.findUnique({
        where: {
            street: data.street,
            city: data.city,
            state: data.state,
            cep: data.cep,
        }
      });
    
      if (existingAddress) {
        throw new Error('Endereço já existe');
      }
    
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

export async function updateAddress (id: string, addressData: IAddress){
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
