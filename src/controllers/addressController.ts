// controllers/AddressController.ts
import { Request, Response } from 'express';
import * as AddressModel from '../models/addressModel';

export async function createAddress(req: Request, res: Response) {
  try {

    const { street, city, country, clientId } = req.body;

    if (!street || !city || !country || !clientId) {
      return res.status(400).json({
        error: true,
        messege: 'Todos os campos são obrigatórios' });
    }

    const address = await AddressModel.createAddress(req.body);

    return res.status(201).json({
        error: false,
        message: 'Sucesso! Endereço adicionado com sucesso',
        address
    });
  } catch (err: any){
    return res.json({message: err.message})
  }
}