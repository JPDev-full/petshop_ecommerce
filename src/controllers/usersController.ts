import { Request, Response } from "express";
import * as userModel from "../models/userModel";
import * as clientModel from "../models/clientModel";

export async function createUser(req: Request, res: Response) {
  try {
    const {
      email,
      password,
      isAdmin = false,
    }: {
      email: string;
      password: string;
      isAdmin?: boolean;
    } = req.body;
    const { name, cpf, phone }: { name: string; cpf: string; phone: string } =
      req.body;
    // Cria o cliente

    const newUser = await userModel.createUser(
      { email, password, isAdmin },
      { name, cpf, phone }
    );
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating Client" });
  }
}

export async function createAdmin(req: Request, res: Response) {
  try {
    const {
      email,
      password,
      isAdmin = true,
    }: {
      email: string;
      password: string;
      isAdmin?: boolean;
    } = req.body;
    const newUser = await userModel.createAdmin({
      email,
      password,
      isAdmin,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating User" });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching User" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const {
      email,
      password,
      client_id,
      isAdmin,
    }: {
      email: string;
      password: string;
      client_id?: number;
      isAdmin?: boolean;
    } = req.body;
    const updatedClient = await userModel.updateUser(id, {
      email,
      password,
      client_id,
      isAdmin,
    });
    res.json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating User" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await userModel.deleteUser(id);

    if (user.client_id !== null && user.client_id !== undefined) {
      const client = await clientModel.getClienteById(user.client_id);
      if (client) {
        await clientModel.deleteClient(client.id_client);
      }
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting user" });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching users" });
  }
}
