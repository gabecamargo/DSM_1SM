import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

const allowOrigin = process.env.ALLOW_ORIGIN || "*";
app.use(cors({ origin: allowOrigin }));

app.get("/", (_req, res) => {
  res.json({ status: "OK", service: "Controle de Despesas API" });
});

// Rotas de despesas
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/expenses_db";

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
});
