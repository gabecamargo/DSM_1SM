import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const criarPessoa = async (req: Request, res: Response) => {
  try {
    const { nome } = req.body;
    if (!nome) {
      return res.status(400).json({ error: "Nome é obrigatório." });
    }

    const pessoa = await prisma.pessoa.create({
      data: { nome },
    });

    return res.status(201).json(pessoa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar pessoa." });
  }
};

export const listarPessoas = async (_req: Request, res: Response) => {
  try {
    const pessoas = await prisma.pessoa.findMany({
      include: { telefones: true, carros: true },
    });
    return res.json(pessoas);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar pessoas." });
  }
};

export const buscarPessoaPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const pessoa = await prisma.pessoa.findUnique({
      where: { idpessoa: Number(id) },
      include: { telefones: true, carros: true },
    });

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa não encontrada." });
    }

    return res.json(pessoa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar pessoa." });
  }
};

export const atualizarPessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;

    const pessoa = await prisma.pessoa.update({
      where: { idpessoa: Number(id) },
      data: { nome },
    });

    return res.json(pessoa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar pessoa." });
  }
};

export const excluirPessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.pessoa.delete({
      where: { idpessoa: Number(id) },
    });

    return res.json({ message: "Pessoa excluída com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir pessoa." });
  }
};
