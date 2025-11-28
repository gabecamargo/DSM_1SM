import { Router } from "express";
import Evento from "../models/Evento";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const novoEvento = await Evento.create(req.body);
    res.status(201).json({ mensagem: "Evento criado com sucesso", novoEvento });
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao criar evento", detalhes: erro });
  }
});

router.get("/", async (req, res) => {
  try {
    const { titulo } = req.query;
    let eventos;

    if (titulo) {
      eventos = await Evento.find({
        titulo: { $regex: titulo as string, $options: "i" },
      });
    } else {
      eventos = await Evento.find();
    }

    res.json(eventos);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao listar eventos", detalhes: erro });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const eventoAtualizado = await Evento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!eventoAtualizado)
      return res.status(404).json({ erro: "Evento não encontrado" });

    res.json({ mensagem: "Atualizado com sucesso", eventoAtualizado });
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao atualizar evento", detalhes: erro });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletado = await Evento.findByIdAndDelete(req.params.id);

    if (!deletado)
      return res.status(404).json({ erro: "Evento não encontrado" });

    res.json({ mensagem: "Evento excluído com sucesso" });
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao excluir evento", detalhes: erro });
  }
});

export default router;