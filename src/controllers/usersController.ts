import { Request, Response } from "express";
import * as userModel from "../models/userModel";

export async function createUser(req: Request, res: Response) {
  try {
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
    const newUser = await userModel.createUser({
      email,
      password,
      client_id,
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
    await userModel.deleteUser(id);
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting client" });
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
