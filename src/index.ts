import http from "http";
// Importa o módulo http do Node.js, que é usado para criar um servidor HTTP.
import app from "./app";
// Importa a aplicação Express (app) do Node.js.

// Cria um servidor HTTP usando o módulo http do Node.js e passa a aplicação Express (app) como argumento para lidar com as requisições.
const server = http.createServer(app);

//  O servidor escutará na porta 8080 e, quando estiver pronto, exibirá a mensagem "Servidor escutando na porta 8080" no console.
server.listen(8080, () => console.log("Servidor escutando na porta 8080"));