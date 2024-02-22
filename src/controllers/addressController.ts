// controllers/AddressController.ts
import { Request, Response } from 'express';
import * as AddressModel from '../models/addressModel';

export async function createAddress(req: Request, res: Response) {
  try {

    const addressData: AddressModel.IAddress = req.body;

    if (!addressData.street || !addressData.city || !addressData.state || !addressData.cep) {
      return res.status(400).json({
        error: true,
        messege: 'Todos os campos são obrigatórios' });
    }

    const address = await AddressModel.createAddress(addressData);

    return res.status(201).json({
        message: 'Sucesso! Endereço adicionado com sucesso',
        address
    });
  } catch (err: any){
    return res.status(500).json({ 
        error: true, 
        message: 'Erro ao criar endereço' 
    });
  }
};

export async function getAllAddress(req: Request, res: Response) {
    try {
        const addressList = await AddressModel.getAllAddress();
        
        if (addressList.length === 0) {
            return res.status(404).json({ 
                error: true, 
                message: 'Nenhum endereço encontrado' 
            });
        }

        return res.status(200).json(addressList);

    } catch (error) {
        return res.status(500).json({ 
            error: true, 
            message: 'Erro ao buscar endereços' 
        });
    }
};

export async function getAddressById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const addressList = await AddressModel.getAddressByID(id);

        if (!addressList) {
            return res.status(404).json({ 
                error: true, 
                message: 'Endereço não encontrado' 
            });
        }

        return res.status(200).json(addressList);

    } catch (error) {
        return res.status(500).json({ 
            error: true, 
            message: 'Erro ao buscar endereço por ID' 
        });
    }
};