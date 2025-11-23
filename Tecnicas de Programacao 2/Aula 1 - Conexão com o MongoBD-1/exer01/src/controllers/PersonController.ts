import { Request, Response } from "express";
import { Person } from "../models";

export class PersonController {
    static async create(req: Request, res: Response) {
        try {
            const person = await Person.create(req.body);
            res.json(person);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
    static async list(req: Request, res: Response) {
        res.json(await Person.find());
    }
}
