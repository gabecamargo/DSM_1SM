import { Router } from "express";
import { DistrictController } from "../controllers/DistrictController";

const router = Router();
router.post("/:idState/:idCity", DistrictController.addDistrict);
export default router;
