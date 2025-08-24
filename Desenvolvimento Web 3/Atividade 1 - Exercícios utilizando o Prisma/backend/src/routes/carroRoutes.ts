import { Router } from "express";
import { 
  criarCarro, 
  listarCarros, 
  buscarCarroPorId, 
  atualizarCarro, 
  excluirCarro 
} from "../controllers/carroController";

const router = Router();

router.post("/carros", criarCarro);       // Criar
router.get("/carros", listarCarros);      // Listar todos
router.get("/carros/:id", buscarCarroPorId); // Buscar por id
router.put("/carros/:id", atualizarCarro);   // Atualizar
router.delete("/carros/:id", excluirCarro);  // Excluir

export default router;
