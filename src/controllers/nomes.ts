import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErrors";

export default {
create: async (request: Request, response: Response) => {
    try {
      const { nome, cpf, email, idade } = request.body;
      if(!nome || !cpf || !email || !idade ){
        return response.status(400).json("Dados do aluno incompletos")
      }
      const student = await prisma.alunos.create({
        data: {
          nome,
          cpf,
          email,
          idade,
        },
      });
      return response.status(201).json(student);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
  sortearAluno: async (request: Request, response: Response) => {
  try {

    const alunos = await prisma.alunos.findMany();

    if (alunos.length === 0) {
      return response.status(404).json({
        message: "Nenhum aluno encontrado"
      });
    }

    const indiceAleatorio = Math.floor(Math.random() * alunos.length);

    const alunoSorteado = alunos[indiceAleatorio];

    return response.status(200).json({
      message: "Aluno sorteado com sucesso",
      aluno: alunoSorteado
    });

  } catch (e) {
    return handleErrors(e, response);
  }
},
};