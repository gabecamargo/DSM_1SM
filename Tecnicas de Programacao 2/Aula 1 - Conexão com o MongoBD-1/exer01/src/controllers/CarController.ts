import { Request, Response } from "express";
import { Car } from "../models";

export class CarController {
    static async create(req: Request, res: Response) {
        try {
            const car = await Car.create(req.body);
            res.json(car);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
    static async list(req: Request, res: Response) {
        res.json(await Car.find());
    }
}
