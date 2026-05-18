import { Router } from "express";
// Importa o roteador do Express para definir as rotas da aplicação.
import nomescontroller from "./controllers/nomes";
// Importa o roteador do Express para definir as rotas da aplicação.

// Cria uma instância do roteador do Express para definir as rotas da aplicação.
const routes = Router();
routes.get("/", (request, response) => {
    response.status(200).json({ message: "Bem vindo ao Sorteador online!" });
});

routes.post("/nomes", nomescontroller.create);
routes.get("/nomes", nomescontroller.sortearAluno);

export default routes;