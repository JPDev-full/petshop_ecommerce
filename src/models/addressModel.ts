import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Address {
  city: string,
  state: string,
  cep: string,
  street: string,
  client_id?: number

};

export async function createAddress(addressData: Address) {

  const {client_id, ...data} = addressData
  return await prisma.address.create({
    data: {
      ... data
    }
  })

}

export async function getAllAddress(){
    return await prisma.address.findMany();
};

export async function getAddressByID(id: any) {
    return await prisma.address.findUnique({ 
      where: { id_address: id}
    });
};

export async function getAddressByClientId(client_id: any){
    return await prisma.address.findMany({
      where: { client_id },
    });
};

export async function updateAddress (id: number, addressData: Address){
    const {client_id, ...data} = addressData;
    return await prisma.address.update({ 
        where: { id_address: id },
        data: {... data }
      });
};

export async function deleteAddress (id: number){
    return await prisma.address.delete({
        where: { id_address: id }
      });
};
