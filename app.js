const express = require("express"); // Está importando o módulo express pelo Node.js para a variável express.
const swaggerUi = require("swagger-ui-express"); // Está importando o módulo swagger-ui-express pelo Node.js para a variável swaggerUi.
const swaggerDocument = require("./swagger"); // Está importando o arquivo swagger.json para a variável swaggerDocument.

const app = express(); // Está executando/inicializando o express e armazenando na variável app.

const PORT = process.env.PORT || 3000; // Está criando uma variável com a porta do servidor para o site de hospedagem utilizado ou se der erro, ele irá utilizar a porta 3000.

// O listen é responsável por inicializar o servidor, ele recebe dois parâmetros, o primeiro é a porta e o segundo é uma função.
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`),
);

var options = {
  customCss: ".swagger-ui .topbar { display: none }", // Está ocultando a barra superior do swagger.
};

// Está adicionando o plugin swagger-ui-express no express, ele recebe dois parâmetros, o primeiro é a rota e o segundo é o plugin.
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options),
);

require("./src/routes/endpoints")(app); // Está importando o arquivo endpoints.js e passando o app como parâmetro, fazendo isso o app estará disponível no arquivo endpoints.js.
