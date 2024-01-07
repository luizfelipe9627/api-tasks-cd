const path = require("path");
const express = require("express");

module.exports = (app) => {
  const tasks = [];

  app.use(express.json());

  app.use(express.static(path.join(__dirname, "../../public")));

  app.get("/", (req, res) => {
    const index = path.join(__dirname, "../../public/index.html");
    const css = path.join(__dirname, "../../public/css/style.css");

    return res.sendFile(index, css);
  });

  app.get("/tasks", (req, res) => {
    if (!tasks.length) {
      return res.status(400).json({ error: "Tarefas(s) não encontrada(s)." });
    }

    return res.json(tasks);
  });

  app.get("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const task = tasks.find((task) => task.id == id);

    if (!task) {
      return res.status(400).json({ error: "Tarefa não encontrada" });
    }

    return res.json(task);
  });

  app.post("/tasks", (req, res) => {
    const { task, description, priority, completed } = req.body;

    const lastTaskID = tasks.length ? tasks[tasks.length - 1].id : 0;

    const newTask = {
      id: lastTaskID + 1,
      task,
      description,
      priority,
      completed,
    };

    if (!task || !description || !priority || completed === null) {
      return res.status(400).json({ error: "Tarefa não encontrada" });
    }

    tasks.push(newTask);

    return res.status(201).json({ message: "Tarefa criada com sucesso." });
  });

  app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const taskFound = tasks.find((task) => task.id == id);

    const { task, description, priority, completed } = req.body;

    if (
      !taskFound ||
      !id ||
      !task ||
      !description ||
      !priority ||
      completed === null
    ) {
      return res.status(400).json({ error: "Tarefa não encontrada" });
    }

    taskFound.task = task;
    taskFound.description = description;
    taskFound.priority = priority;
    taskFound.completed = completed;

    return res.json({ message: "Tarefa atualizada com sucesso." });
  });

  app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex < 0) {
      return res.status(400).json({ error: "Tarefa não encontrada" }); 
    }

    tasks.splice(taskIndex, 1);

    return res.json({ message: "Tarefa deletada com sucesso." });
  });
};
