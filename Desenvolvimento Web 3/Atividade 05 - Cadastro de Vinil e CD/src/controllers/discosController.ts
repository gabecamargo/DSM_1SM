import { Request, Response } from 'express';
import Disco from '../models/discoModel.js';

export async function listar(req: Request, res: Response) {
  const itens = await Disco.find().sort({ createdAt: -1 });
  res.json(itens);
}

export async function obter(req: Request, res: Response) {
  const { id } = req.params;
  const item = await Disco.findById(id);
  if (!item) return res.status(404).json({ message: 'Não encontrado' });
  res.json(item);
}

export async function criar(req: Request, res: Response) {
  try {
    const novo = await Disco.create(req.body);
    res.status(201).json(novo);
  } catch (err: any) {
    res.status(400).json({ message: 'Erro de validação', error: err.message });
  }
}

export async function atualizar(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const item = await Disco.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Não encontrado' });
    res.json(item);
  } catch (err: any) {
    res.status(400).json({ message: 'Erro ao atualizar', error: err.message });
  }
}

export async function remover(req: Request, res: Response) {
  const { id } = req.params;
  const del = await Disco.findByIdAndDelete(id);
  if (!del) return res.status(404).json({ message: 'Não encontrado' });
  res.status(204).send();
}
