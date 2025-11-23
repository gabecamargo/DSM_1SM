import { Router } from "express";
import { CityController } from "../controllers/CityController";

const router = Router();
router.post("/:idState", CityController.addCity);
export default router;
