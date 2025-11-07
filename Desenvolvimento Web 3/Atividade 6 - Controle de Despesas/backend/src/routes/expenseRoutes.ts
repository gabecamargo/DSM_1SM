import { Router } from "express";
import { createExpense, getExpenses, getTotalExpenses, updateExpense, deleteExpense } from "../controllers/expenseController.js";

const router = Router();

router.get("/", getExpenses);
router.get("/total", getTotalExpenses);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
