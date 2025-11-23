import { Request, Response } from "express";
import { Phone } from "../models";

export class PhoneController {
    static async create(req: Request, res: Response) {
        try {
            const phone = await Phone.create(req.body);
            res.json(phone);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
    static async list(req: Request, res: Response) {
        res.json(await Phone.find());
    }
}
