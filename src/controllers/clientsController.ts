import { Request, Response } from "express";
import * as clientModel from "../models/clientModel";

export async function getClientById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const client = await clientModel.getClienteById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching client" });
  }
}

export async function updateClient(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { name, cpf, phone } = req.body;
    const updatedClient = await clientModel.updateClient(id, {
      name,
      cpf,
      phone,
    });
    res.json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating client" });
  }
}

export async function getAllClients(req: Request, res: Response) {
  try {
    const clients = await clientModel.getAllClients();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching clients" });
  }
}
