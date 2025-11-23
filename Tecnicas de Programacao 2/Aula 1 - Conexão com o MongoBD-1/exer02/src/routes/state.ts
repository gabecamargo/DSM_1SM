import { Router } from "express";
import { StateController } from "../controllers/StateController";

const router = Router();
router.post("/", StateController.create);
router.get("/", StateController.list);
export default router;
