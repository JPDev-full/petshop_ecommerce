import { Request, Response } from "express";
import * as clientModel from "../models/clientModel";

export async function getClientById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid client ID" });
    }

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
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid client ID" });
    }

    const { name, cpf, phone } = req.body;
    if (!name || !cpf || !phone) {
      return res
        .status(400)
        .json({ error: "Name, CPF, and phone are required" });
    }

    const allClients = await clientModel.getAllClients();

    // Check if the new CPF or phone already exists for another client
    const existingClientWithCPF = allClients.find(
      (client) => client.cpf === cpf && client.id_client !== id
    );
    if (existingClientWithCPF) {
      return res
        .status(400)
        .json({ error: "CPF already exists for another client" });
    }

    const existingClientWithPhone = allClients.find(
      (client) => client.phone === phone && client.id_client !== id
    );
    if (existingClientWithPhone) {
      return res
        .status(400)
        .json({ error: "Phone number already exists for another client" });
    }

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

export async function getAllClients(_: Request, res: Response) {
  try {
    const clients = await clientModel.getAllClients();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching clients" });
  }
}
