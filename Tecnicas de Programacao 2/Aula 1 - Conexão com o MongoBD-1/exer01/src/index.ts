import express from "express";
import { connectDB } from "./models/connection";
import routes from "./routes";

const app = express();
app.use(express.json());
connectDB();
app.use("/api", routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
