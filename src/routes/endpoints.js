const path = require("path"); // Está importando o módulo path do node.js, que é responsável por lidar com caminhos de arquivos e diretórios.
const express = require("express"); // Está importando o módulo express pelo Node.js para a variável express.

module.exports = (app) => {
  /* 
    - GET: Buscar/obter uma ou mais informações do back-end.
    - POST: Criar uma nova informação no back-end.
    - PUT: Atualizar uma informação existente no back-end.
    - DELETE: Remover uma informação do back-end.
  */

  const tasks = []; // Está criando um array vazio para armazenar as tarefas.

  // O use é responsável por adicionar um plugin no express, ele recebe um parâmetro que é o plugin.
  app.use(express.json()); // Está adicionando o plugin json no express, ele é responsável por converter o corpo da requisição para json.

  app.use(express.static(path.join(__dirname, "../../public"))); // Está falando para o express que a pasta public é a pasta de arquivos estáticos.

  // Irá obter a rota e retornar o arquivo index.html.
  app.get("/", (req, res) => {
    const index = path.join(__dirname, "../../public/index.html"); // Está criando uma variável com o caminho do arquivo index.html.
    const css = path.join(__dirname, "../../public/css/style.css"); // Está criando uma variável com o caminho do arquivo style.css.

    return res.sendFile(index, css); // Está retornando o arquivo index.html.
  });

  // Irá obter todas as tarefas e retornar as tarefas encontradas.
  app.get("/tasks", (req, res) => {
    // Se o tamanho do array de tarefas for igual falso, ou seja, se não existir tarefas, retorna uma mensagem de erro, caso exista ele continua o código abaixo do if.
    if (!tasks.length) {
      return res.status(400).json({ error: "Tarefas(s) não encontrada(s)." }); // Está retornando um status de erro 400 e uma mensagem de erro.
    }

    return res.json(tasks); // Está retornando como resposta um json com as tarefas.
  });

  // Irá obter o id da tarefa pela url e retornar a tarefa encontrada.
  app.get("/tasks/:id", (req, res) => {
    const { id } = req.params; // Está pegando o id da requisição.

    const task = tasks.find((task) => task.id == id); // Está procurando o produto pelo id, quando encontrado ele retorna para a variável task.

    // Se task for false, ou seja, se não encontrar a tarefa, executa o if.
    if (!task) {
      return res.status(400).json({ error: "Tarefa não encontrada" }); // Está retornando um status de erro 400 e uma mensagem de erro.
    }

    return res.json(task); // Se encontrar a task, retorna a task.
  });

  // Irá criar uma nova task, colocar no final do array de tasks e retorna uma mensagem de sucesso.
  app.post("/tasks", (req, res) => {
    const { task, description, priority, completed } = req.body; // Está desestrutura do corpo da requisição os dados da tarefa, que são task, description, priority e completed.

    // Se o tamanho do array de tarefas for igual verdadeiro, ou seja, se existir tarefas, ele pega o id da última tarefa, caso contrário ele pega o id 0 e coloca na variável lastTaskID.
    const lastTaskID = tasks.length ? tasks[tasks.length - 1].id : 0;

    // Está criando uma nova task com os dados do corpo da requisição.
    const newTask = {
      id: lastTaskID + 1,
      task,
      description,
      priority,
      completed,
    };

    // Se não existir task, description, priority ou completed, retorna uma mensagem de erro, caso exista ele continua o código abaixo do if.
    if (!task || !description || !priority || completed === null) {
      return res.status(400).json({ error: "Tarefa não encontrada" }); // Está retornando um status de erro 400 e uma mensagem de erro.
    }

    tasks.push(newTask); // Está adicionando a nova tarefa no final do array de tarefas.

    return res.status(201).json({ message: "Tarefa criada com sucesso." }); // Está retornando um status de sucesso 201 e uma mensagem de sucesso.
  });

  // Irá atualizar uma task existente e retornar uma mensagem de sucesso.
  app.put("/tasks/:id", (req, res) => {
    const { id } = req.params; // Está pegando o id da requisição.

    const taskFound = tasks.find((task) => task.id == id); // Está procurando a tarefa pelo id, quando encontrada ela retorna para a variável taskFound.

    const { task, description, priority, completed } = req.body; // Está desestrutura do corpo da requisição os dados da tarefa, que são task, description, priority e completed.

    // Se não existir o produto, id, name ou price, retorna uma mensagem de erro, caso exista ele continua o código abaixo do if.
    if (
      !taskFound ||
      !id ||
      !task ||
      !description ||
      !priority ||
      completed === null
    ) {
      return res.status(400).json({ error: "Tarefa não encontrada" }); // Está retornando um status de erro 400 e uma mensagem de erro.
    }

    // Está atualizando a tarefa com os dados do corpo da requisição.
    taskFound.task = task;
    taskFound.description = description;
    taskFoun;
    taskFound.priority = priority;
    taskFound.completed = completed;

    return res.json({ message: "Tarefa atualizada com sucesso." }); // Está retornando uma mensagem de sucesso.
  });

  // Irá remover uma task existente e retornar uma mensagem de sucesso.
  app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params; // Está pegando o id da requisição.

    const taskIndex = tasks.findIndex((task) => task.id == id); // Está procurando o produto pelo id, quando encontrado ele retorna para a variável taskIndex.

    // Se taskIndex for false, ou seja, se não encontrar a task, executa o if.
    if (taskIndex < 0) {
      return res.status(400).json({ error: "Tarefa não encontrada" }); // Está retornando um status de erro 400 e uma mensagem de erro.
    }

    tasks.splice(taskIndex, 1); // Está removendo o produto do array de produtos, o primeiro parâmetro é o índice do produto e o segundo é a quantidade de produtos que serão removidos.

    return res.json({ message: "Tarefa deletada com sucesso." }); // Está retornando uma mensagem de sucesso.
  });
};
