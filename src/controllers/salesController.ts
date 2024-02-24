import { Request, Response } from "express";
import * as salesModel from "../models/salesModel"


export async function createSale(req: Request, res: Response) {
  try{
	const {  client_id, product_id,  quantity, total_amount } : {
		client_id: number;
        product_id: number;
        quantity: number;
        total_amount: number;
	} = req.body;
	const sale = await salesModel.createSale({
	    client_id,
        product_id,
        quantity,
        total_amount
	});
	res.status(201).json(sale);
  }catch(error){
	res.status(400).json(error);
  }
}


export async function getAllSales(req: Request, res: Response){
  const sales = await salesModel.getAllSales();
  res.status(200).json(sales);
}

export async function getSaleById(req: Request, res: Response) {
	try {
		const { id } = req.params;
        const sale = await salesModel.getSaleById(Number(id));
        if (!sale) {
            return res.status(404).json({ error: "Sale not found" });
        }
        res.status(200).json(sale);
	} catch (error) {
		console.error(error);
        res.status(500).json({ error: "Error fetching sale" });
	}
}


export async function updateSale(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const {
			client_id,
            product_id,
            quantity,
            total_amount
		} = req.body;
		const updatedSale = await salesModel.updateSale(Number(id), {
			client_id,
            product_id,
            quantity,
            total_amount
		});
		res.status(200).json(updatedSale);
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error updating User" });
	  }
}


export async function deleteSale(req: Request, res: Response) {
	try {
        const { id } = req.params;
        const sale = await salesModel.deleteSale(Number(id));
        if (!sale) {
            return res.status(404).json({ error: "Sale not found" });
        }
        res.status(200).json(sale);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating User" });
      }  
}
