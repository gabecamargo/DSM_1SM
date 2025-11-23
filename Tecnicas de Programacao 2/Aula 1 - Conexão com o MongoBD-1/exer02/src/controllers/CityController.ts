import { Request, Response } from "express";
import { State } from "../models";

export class CityController {
    static async addCity(req: Request, res: Response) {
        try {
            const { idState } = req.params;
            const state = await State.findOne({ id: Number(idState) });

            if (!state) return res.status(404).json({ error: "Estado não encontrado." });

            state.cities.push(req.body);
            await state.save();

            res.json(state);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
}
