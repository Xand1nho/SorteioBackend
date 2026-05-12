import { request, response, Router } from "express";
import nomescontroller from "./controllers/nomes";

const routes = Router();
routes.get("/", (request, response) => {
    response.status(200).json({ message: "Bem vindo ao Sorteador online!" });
});

routes.post("/nomes", nomescontroller.create);
routes.get("/nomes", nomescontroller.sortearAluno);

export default routes;