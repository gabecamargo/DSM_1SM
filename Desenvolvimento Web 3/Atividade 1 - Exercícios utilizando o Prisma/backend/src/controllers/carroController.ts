import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const criarCarro = async (req: Request, res: Response) => {
  try {
    const { modelo } = req.body;
    if (!modelo) {
      return res.status(400).json({ error: "Modelo é obrigatório." });
    }

    const carro = await prisma.carro.create({
      data: { modelo },
    });

    return res.status(201).json(carro);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar carro." });
  }
};

export const listarCarros = async (_req: Request, res: Response) => {
  try {
    const carros = await prisma.carro.findMany();
    return res.json(carros);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar carros." });
  }
};

export const buscarCarroPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const carro = await prisma.carro.findUnique({
      where: { idcarro: Number(id) },
    });

    if (!carro) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }

    return res.json(carro);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar carro." });
  }
};

export const atualizarCarro = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { modelo } = req.body;

    const carro = await prisma.carro.update({
      where: { idcarro: Number(id) },
      data: { modelo },
    });

    return res.json(carro);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar carro." });
  }
};

export const excluirCarro = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.carro.delete({
      where: { idcarro: Number(id) },
    });

    return res.json({ message: "Carro excluído com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir carro." });
  }
};
