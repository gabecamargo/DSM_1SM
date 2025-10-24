import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import discosRouter from './routes/discosRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/discos', discosRouter);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/discosdb';
const port = Number(process.env.PORT) || 3000;

async function start() {
  try {
    await mongoose.connect(mongoUri);
    console.log('✅ Conectado ao MongoDB');
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();
