import { Router } from "express";
import { CarByPersonController } from "../controllers/CarByPersonController";

const router = Router();
router.post("/", CarByPersonController.create);
router.get("/", CarByPersonController.list);
export default router;
