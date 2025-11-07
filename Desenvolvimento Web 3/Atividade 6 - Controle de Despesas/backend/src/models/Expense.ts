import mongoose, { Schema, Document } from "mongoose";

export interface IExpense extends Document {
  description: string;
  amount: number;
  date: Date;
}

const ExpenseSchema = new Schema<IExpense>(
  {
    description: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true, default: Date.now }
  },
  { timestamps: true }
);

export const Expense = mongoose.model<IExpense>("Expense", ExpenseSchema);
