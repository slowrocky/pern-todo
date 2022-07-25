const express = require("express");
const router = express.Router();

const TodosService = require("../services/TodosService");
const TodosServiceInstance = new TodosService();

module.exports = (app) => {
  app.use("/todos", router);

  // create todo
  router.post("/", async (req, res, next) => {
    try {
      const { description } = req.body;
      const response = await TodosServiceInstance.create(description);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  });

  //get all todos
  router.get("/", async (req, res, next) => {
    try {
      const response = await TodosServiceInstance.list();
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });

  //get a todo
  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await TodosServiceInstance.get(id);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });
  //update a todo
  router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const response = await TodosServiceInstance.updateTodo(id, description);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });

  //delete a todo
  router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await TodosServiceInstance.removeTodo(id);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });
};
