// controllers/AddressController.ts
import { Request, Response } from "express";
import * as AddressModel from "../models/addressModel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAddress(req: Request, res: Response) {
  try {
    const addressData: AddressModel.Address = req.body;
    const { client_id, ...data } = addressData;

    if (
      !addressData.street ||
      !addressData.city ||
      !addressData.state ||
      !addressData.cep
    ) {
      return res.status(400).json({
        error: true,
        messege: "Todos os campos são obrigatórios",
      });
    }

    const existingAddress = await prisma.address.findFirst({
      where: {
        city: data.city,
        state: data.state,
        cep: data.cep,
        street: data.street,
        client_id: client_id || undefined,
      },
    });

    if (existingAddress) {
      return res.status(400).json({
        error: true,
        message: "Endereço já existe",
      });
    }

    const address = await AddressModel.createAddress(addressData);
    return res.status(201).json({
      message: "Sucesso! Endereço adicionado com sucesso",
      address,
    });
  } catch (err: any) {
    console.error(err);
    res.json({
      error: true,
      message: "Erro ao criar endereço",
    });
  }
}

export async function getAllAddress(req: Request, res: Response) {
  try {
    const addressList = await AddressModel.getAllAddress();

    if (!addressList) {
      return res.status(404).json(addressList);
    }

    return res.json(addressList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Erro ao buscar endereços",
    });
  }
}

export async function getAddressById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const addressList = await AddressModel.getAddressByID(id);

    if (!addressList) {
      return res.status(404).json({
        error: true,
        message: "Endereço não encontrado",
      });
    }

    res.status(200).json(addressList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Erro ao buscar endereço por ID",
    });
  }
}

export async function getAddressByClientId(req: Request, res: Response) {
  try {
    const { clientId } = req.params;
    const addressesClient = await AddressModel.getAddressByClientId(
      parseInt(clientId)
    );
    return res.json(addressesClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Erro ao buscar endereços por ID do cliente",
    });
  }
}

export async function deleteAddress(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    if (!id) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const existingAddress = await AddressModel.getAddressByID(id);
    if (!existingAddress) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    const deletedAddress = await AddressModel.deleteAddress(id);
    res.json({ message: "Endereço excluído com sucesso", deletedAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao excluir o endereço" });
  }
}

export async function updateAddress(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const addressData: AddressModel.Address = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const existingAddress = await AddressModel.getAddressByID(id);
    if (!existingAddress) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    const updatedAddress = await AddressModel.updateAddress(id, addressData);

    res.json({ message: "Endereço atualizado com sucesso", updatedAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao atualizar o endereço" });
  }
}
