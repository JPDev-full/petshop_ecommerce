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
        error: false,
        message: 'Sucesso! Endereço adicionado com sucesso',
        address
    });
  } catch (err: any){
    return res.status(500).json({ 
        error: true, 
        message: 'Erro ao criar endereço' 
    });
  }
}