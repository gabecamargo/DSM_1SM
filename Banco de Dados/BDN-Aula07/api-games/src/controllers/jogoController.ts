import { Request, Response } from 'express';
import Jogo, { IJogo } from '../models/Jogo';

export const getJogos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const jogos = await Jogo.find();
    return res.status(200).json(jogos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar jogos.', error });
  }
};

export const createJogo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nome, categoria, preco, estoque } = req.body;
    const newJogo: IJogo = new Jogo({
      nome,
      categoria,
      preco,
      estoque,
    });
    const savedJogo = await newJogo.save();
    return res.status(201).json(savedJogo);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar jogo.', error });
  }
};

export const updateJogo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedJogo = await Jogo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedJogo) {
      return res.status(404).json({ message: 'Jogo não encontrado.' });
    }
    return res.status(200).json(updatedJogo);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar jogo.', error });
  }
};

export const deleteJogo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deletedJogo = await Jogo.findByIdAndDelete(id);
    if (!deletedJogo) {
      return res.status(404).json({ message: 'Jogo não encontrado.' });
    }
    return res.status(200).json({ message: 'Jogo deletado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar jogo.', error });
  }
};