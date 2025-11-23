import { Router } from "express";
import { CarController } from "../controllers/CarController";

const router = Router();
router.post("/", CarController.create);
router.get("/", CarController.list);
export default router;
