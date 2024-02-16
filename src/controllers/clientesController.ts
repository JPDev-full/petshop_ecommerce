import { Request, Response } from 'express';
import * as clientModel from '../models/clientModel';

export async function createClient(req: Request, res: Response) {
  try {
    const { name, cpf, email, phone, password } = req.body;
    const newClient = await clientModel.createClient({ name, cpf, email, phone, password });
    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating client' });
  }
}

export async function getClientById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const client = await clientModel.getClienteById(id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching client' });
  }
}

export async function updateClient(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, cpf, email, phone } = req.body;
    const updatedClient = await clientModel.updateCliente(id, {
      name, cpf, email, phone,
      password: ''
    });
    res.json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating client' });
  }
}

export async function deleteClient(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await clientModel.deleteCliente(id);
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting client' });
  }
}

export async function getAllClients(req: Request, res: Response) {
  try {
    const clients = await clientModel.getAllClientes();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching clients' });
  }
}
