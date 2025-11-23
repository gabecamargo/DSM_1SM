import { Router } from "express";
import person from "./person";
import car from "./car";
import phone from "./phone";
import carbyperson from "./carbyperson";

const router = Router();
router.use("/people", person);
router.use("/cars", car);
router.use("/phones", phone);
router.use("/carbyperson", carbyperson);
export default router;
