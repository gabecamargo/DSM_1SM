import { Router } from "express";
import { PhoneController } from "../controllers/PhoneController";

const router = Router();
router.post("/", PhoneController.create);
router.get("/", PhoneController.list);
export default router;
