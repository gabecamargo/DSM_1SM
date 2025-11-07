import { Request, Response } from "express";
import { Expense } from "../models/Expense.js";

// Criar
export async function createExpense(req: Request, res: Response) {
  try {
    const { description, amount, date } = req.body;

    if (!description || description.trim() === "") {
      return res.status(400).json({ error: "Descrição é obrigatória." });
    }
    if (amount === undefined || amount === null || isNaN(Number(amount)) || Number(amount) < 0) {
      return res.status(400).json({ error: "Valor inválido." });
    }

    const expense = await Expense.create({
      description: description.trim(),
      amount: Number(amount),
      date: date ? new Date(date) : new Date()
    });
    return res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao criar despesa." });
  }
}

// Listar
export async function getExpenses(_req: Request, res: Response) {
  try {
    const expenses = await Expense.find().sort({ date: -1, createdAt: -1 });
    return res.json(expenses);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar despesas." });
  }
}

// Somatório com aggregate
export async function getTotalExpenses(_req: Request, res: Response) {
  try {
    const result = await Expense.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
    const total = result.length > 0 ? result[0].total : 0;
    return res.json({ total });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao calcular total." });
  }
}

// Atualizar
export async function updateExpense(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { description, amount, date } = req.body;

    const payload: any = {};
    if (description !== undefined) {
      if (description.trim() === "") {
        return res.status(400).json({ error: "Descrição não pode ser vazia." });
      }
      payload.description = description.trim();
    }
    if (amount !== undefined) {
      const num = Number(amount);
      if (isNaN(num) || num < 0) {
        return res.status(400).json({ error: "Valor inválido." });
      }
      payload.amount = num;
    }
    if (date !== undefined) {
      const d = new Date(date);
      if (isNaN(d.getTime())) {
        return res.status(400).json({ error: "Data inválida." });
      }
      payload.date = d;
    }

    const updated = await Expense.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return res.status(404).json({ error: "Despesa não encontrada." });
    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar despesa." });
  }
}

// Excluir
export async function deleteExpense(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deleted = await Expense.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Despesa não encontrada." });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao excluir despesa." });
  }
}
