import express from 'express';
import mongoose from 'mongoose';
import jogoRoutes from './routes/jogoRoutes';

// Inicializa a aplicação Express
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// URI de conexão do MongoDB
const mongoURI = 'mongodb://localhost:27017/api_games';

// Conexão com o MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Usar as rotas de jogos
app.use('/api', jogoRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});