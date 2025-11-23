import { Request, Response } from "express";
import { State } from "../models";

export class StateController {
    static async create(req: Request, res: Response) {
        try {
            const state = await State.create(req.body);
            res.json(state);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }

    static async list(req: Request, res: Response) {
        res.json(await State.find());
    }
}
