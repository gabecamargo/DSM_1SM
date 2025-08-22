import { Router } from "express";
import { 
  criarPessoa, 
  listarPessoas, 
  buscarPessoaPorId, 
  atualizarPessoa, 
  excluirPessoa 
} from "../controllers/pessoaController";

const router = Router();

router.post("/pessoas", criarPessoa);
router.get("/pessoas", listarPessoas);
router.get("/pessoas/:id", buscarPessoaPorId);
router.put("/pessoas/:id", atualizarPessoa);
router.delete("/pessoas/:id", excluirPessoa);

export default router;
