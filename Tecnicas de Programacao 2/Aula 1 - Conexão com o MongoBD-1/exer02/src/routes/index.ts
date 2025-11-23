import { Router } from "express";
import state from "./state";
import city from "./city";
import district from "./district";

const router = Router();
router.use("/states", state);
router.use("/cities", city);
router.use("/districts", district);
export default router;
