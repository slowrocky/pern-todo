const createError = require("http-errors");
const TodosModel = require("../models/todos");
const TodosModelInstance = new TodosModel();

module.exports = class TodosService {
  async list() {
    try {
      // Load todos
      const todos = await TodosModelInstance.find();

      return todos;
    } catch (err) {
      throw err;
    }
  }

  async get(id) {
    try {
      // Check if todo exists
      const todo = await TodosModelInstance.findOneByID(id);

      // If no todo found, reject
      if (!todo) {
        throw createError(404, "Todo not found");
      }

      return todo;
    } catch (err) {
      throw err;
    }
  }

  async create(description) {
    try {
      const newTodo = await TodosModelInstance.create(description);

      return newTodo;
    } catch (err) {
      throw err;
    }
  }

  async updateTodo(id, description) {
    try {
      const updateTodo = await TodosModelInstance.update(id, description);

      return updateTodo;
    } catch (err) {
      throw err;
    }
  }

  async removeTodo(id) {
    try {
      const removeTodo = await TodosModelInstance.delete(id);

      return removeTodo;
    } catch (err) {
      throw err;
    }
  }
};
