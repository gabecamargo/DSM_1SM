import { Request, Response } from "express";
import { CarByPerson } from "../models";

export class CarByPersonController {
    static async create(req: Request, res: Response) {
        try {
            const rel = await CarByPerson.create(req.body);
            res.json(rel);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
    static async list(req: Request, res: Response) {
        res.json(await CarByPerson.find());
    }
}
