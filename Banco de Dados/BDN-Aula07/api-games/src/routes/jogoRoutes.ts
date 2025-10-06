import { Router } from 'express';
import { getJogos, createJogo, updateJogo, deleteJogo } from '../controllers/jogoController';

const router = Router();

// Define as rotas da API
router.get('/jogos', getJogos);
router.post('/jogos', createJogo);
router.put('/jogos/:id', updateJogo);
router.delete('/jogos/:id', deleteJogo);

export default router;