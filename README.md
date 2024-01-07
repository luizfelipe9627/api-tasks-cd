# Documentação da API

<div display="flex">
  <img src="https://img.shields.io/static/v1?label=Node&message=20.10.0&color=green&style=for-the-badge&logo=node.js"/> 
  <img src="https://img.shields.io/static/v1?label=Express&message=4.18.2&color=blue&style=for-the-badge&logo=express"/> 
  <img src="https://img.shields.io/static/v1?label=Swagger&message=5.0.0&color=orange&style=for-the-badge&logo=swagger"/>
  <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0.0&color=important&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Author&message=Luiz%20Felipe%20Silva&color=blue&style=for-the-badge"/>
</div>

<img src="./src/assets/swagger.png" alt="Swagger" width="100%"/>

## Sumário

- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Visão geral da API](#visão-geral-da-api)
- [Documentação do Swagger](#documentação-do-swagger)
- [Recursos principais e Exemplos](#recursos-principais-e-exemplos)
  - [1. Listar produtos](#1-listar-produtos)
  - [2. Criar produto](#2-criar-produto)
  - [3. Obter produto](#3-obter-produto)
  - [4. Atualizar produto](#4-atualizar-produto)
  - [5. Deletar produto](#5-deletar-produto)

## Introdução

Bem-vindo à documentação da API Tasks! Esta documentação fornece informações detalhadas sobre como usar a API, incluindo endpoints disponíveis, parâmetros aceitos, códigos de status e exemplos práticos. A documentação Swagger está disponível para uma visão mais interativa da API.

## Requisitos

- Node.js 14.15.1 ou superior.
- NPM 6.14.8 ou superior.

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório

```bash
  git clone https://github.com/luizfelipe9627/api-tasks-cd
```

2. Instale as dependências

```bash
  npm install
```

3. Execute o projeto

```bash
  npm run start
```

4. Acesse a documentação da API

```bash
http://localhost:3000/api-docs
```

## Visão geral da API

A API foi projetada para ser fácil e simples de usar. Abaixo estão alguns pontos importantes para começar:

- **Base URL**: O endpoint base para todas as chamadas da API é [http://localhost:3000].
- **Autenticação**: A API não requer autenticação.
- **Estrutura da resposta**: As respostas da API são retornadas em formato JSON. Os exemplos de resposta são fornecidos na documentação abaixo para cada endpoint.
- **Códigos de status**: A API retorna os seguintes códigos de status padrão: 200, 201, 400, 404 e 500. Códigos de status personalizados podem ser retornados em determinadas situações.

## Documentação do Swagger

Explore e teste a API de forma interativa usando a documentação local do Swagger. Acesse [link para a documentação do Swagger](http://localhost:3000/api-docs) para obter uma visão visual completa dos endpoints, parâmetros e exemplos. Só é possível acessar a documentação do Swagger localmente após a instalação e execução do projeto.

## Recursos principais e Exemplos

### 1. Listar tarefas

Retorna uma lista de todos as tarefas.

- **Endpoint**: `/tasks`
- **Método**: `GET`

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "task": "Reunião de Projeto",
    "description": "Preparar apresentação para a reunião de projeto com a equipe de desenvolvimento.",
    "priority": "Alta",
    "completed": false
  }
  {
  "id": 2,
  "task": "Relatório Mensal",
  "description": "Elaborar o relatório mensal de desempenho e progresso do projeto para apresentação à diretoria.",
  "priority": "Média",
  "completed": false
}
]
```

### 2. Criar tarefa

Cria uma nova tarefa.

- **Endpoint**: `/tasks`
- **Método**: `POST`

**Exemplo de corpo da solicitação:**

```json
{
  "id": 3,
  "task": "Atualização do Site",
  "description": "Implementar as últimas atualizações no site da empresa.",
  "priority": "Alta",
  "completed": false
}
```

**Exemplo de resposta:**

```json
{
  "message": "Tarefa criada com sucesso."
}
```

### 3. Obter tarefa

Retorna uma tarefa específica.

- **Endpoint**: `/tasks/:id`
- **Método**: `GET`

**Exemplo de resposta:**

```json
{
  "id": 2,
  "task": "Relatório Mensal",
  "description": "Elaborar o relatório mensal de desempenho e progresso do projeto para apresentação à diretoria.",
  "priority": "Média",
  "completed": false
}
```

### 4. Atualizar tarefa

Atualiza uma tarefa específica.

- **Endpoint**: `/tasks/:id`
- **Método**: `PUT`

**Exemplo de corpo da solicitação:**

```json
{
  "id": 2,
  "task": "Revisão do Relatório Mensal",
  "description": "Revisar e aprimorar o relatório mensal antes da apresentação à diretoria.",
  "priority": "Alta",
  "completed": false
}
```

**Exemplo de resposta:**

```json
{
  "message": "Tarefa atualizada com sucesso."
}
```

### 5. Deletar tarefa

Deleta uma tarefa específica.

- **Endpoint**: `/products/:id`
- **Método**: `DELETE`

**Exemplo de resposta:**

```json
{
  "message": "Tarefa deletada com sucesso."
}
```
