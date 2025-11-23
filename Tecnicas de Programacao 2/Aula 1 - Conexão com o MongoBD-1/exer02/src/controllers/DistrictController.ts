import { Request, Response } from "express";
import { State } from "../models";

export class DistrictController {
    static async addDistrict(req: Request, res: Response) {
        try {
            const { idState, idCity } = req.params;
            const state = await State.findOne({ id: Number(idState) });

            if (!state) return res.status(404).json({ error: "Estado não encontrado." });

            const city = state.cities.find(c => c.id === Number(idCity));
            if (!city) return res.status(404).json({ error: "Cidade não encontrada." });

            city.districts.push(req.body);
            await state.save();

            res.json(state);
        } catch (err) {
            res.status(400).json({ error: err });
        }
    }
}
