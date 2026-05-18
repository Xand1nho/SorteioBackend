import { Request, Response } from "express";

import { handleErrors } from "../helpers/handleErrors";

export default {


  // Método para criar uma lista de nomes
  create: async (request: Request, response: Response) => {
    try {

      const { nomes } = request.body; // Obtém o objeto JSON do corpo da requisição


      // Verifica se a lista não está vazia
      if (!nomes) {
        return response.status(400).json("Lista vazia")
      }

      // Retorna o elemento criado
      return response.status(201).json(nomes);

    } catch (e) {
      // Caso Contrário, Retorna o erro
      return handleErrors(e, response);
    }
  },


  // Método para sortear um aluno da lista
  sortearAluno: async (request: Request, response: Response) => {
    try {

      const { nomes } = request.body; // Obtém o objeto JSON do corpo da requisição

      // Verifica se a lista não está vazia
      if (!nomes) {
        return response.status(400).json("Lista vazia")
      }

      // Aqui ele sorteia um aluno da lista utilizando a função Math.random() para gerar um número aleatório e Math.floor() para arredondar para baixo, garantindo que o índice seja válido para acessar um elemento da lista de nomes.
      const indiceAleatorio = Math.floor(Math.random() * nomes.length);

      // Retorna o elemento sorteado
      return nomes[indiceAleatorio];

    } catch (e) {
      return handleErrors(e, response);
    }

  }



}

