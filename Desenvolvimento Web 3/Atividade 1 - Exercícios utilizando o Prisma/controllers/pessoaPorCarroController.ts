import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const associarPessoaCarro = async (req: Request, res: Response) => {
  try {
    const { idpessoa, idcarro } = req.body;

    if (!idpessoa || !idcarro) {
      return res.status(400).json({ error: "idpessoa e idcarro são obrigatórios." });
    }

    const associacao = await prisma.pessoaPorCarro.create({
      data: { idpessoa, idcarro },
    });

    return res.status(201).json(associacao);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao associar pessoa e carro." });
  }
};

export const listarAssociacoes = async (_req: Request, res: Response) => {
  try {
    const associacoes = await prisma.pessoaPorCarro.findMany({
      include: {
        pessoa: true,
        carro: true,
      },
    });

    return res.json(associacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar associações." });
  }
};

export const excluirAssociacao = async (req: Request, res: Response) => {
  try {
    const { idpessoa, idcarro } = req.body;

    if (!idpessoa || !idcarro) {
      return res.status(400).json({ error: "idpessoa e idcarro são obrigatórios." });
    }

    await prisma.pessoaPorCarro.delete({
      where: {
        idpessoa_idcarro: {
          idpessoa: Number(idpessoa),
          idcarro: Number(idcarro),
        },
      },
    });

    return res.json({ message: "Associação excluída com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir associação." });
  }
};
