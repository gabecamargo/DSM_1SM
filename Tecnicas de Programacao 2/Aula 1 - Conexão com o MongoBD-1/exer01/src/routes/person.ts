import { Router } from "express";
import { PersonController } from "../controllers/PersonController";

const router = Router();
router.post("/", PersonController.create);
router.get("/", PersonController.list);
export default router;
