import { Router } from "express";
import { 
  associarPessoaCarro, 
  listarAssociacoes, 
  excluirAssociacao 
} from "../controllers/pessoaPorCarroController";

const router = Router();

router.post("/associacoes", associarPessoaCarro);  // Criar associação
router.get("/associacoes", listarAssociacoes);     // Listar associações
router.delete("/associacoes", excluirAssociacao);  // Excluir associação

export default router;
