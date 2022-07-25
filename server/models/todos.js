const db = require("../db/db");

module.exports = class TodosModel {
  // create todo
  async create(description) {
    try {
      const newTodo = await db.query(
        "INSERT INTO todo (description) VALUES ($1) RETURNING *",
        [description]
      );

      if (newTodo.rows?.length) {
        return newTodo.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOneByID(id) {
    try {
      const todo = await db.query("SELECT * FROM todo WHERE tid = $1", [id]);

      if (todo.rows?.length) {
        return todo.rows[0];
      }
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async find() {
    try {
      const todos = await db.query("SELECT * FROM todo");

      if (todos.rows?.length) {
        return todos.rows;
      }
      return [];
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, description) {
    try {
      const updateTodo = await db.query(
        "UPDATE todo SET description = $1 WHERE tid = $2 RETURNING *",
        [description, id]
      );

      if (updateTodo.rows?.length) {
        return updateTodo.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      const deleteTodo = await db.query("DELETE FROM todo WHERE tid = $1 RETURNING *", [
        id,
      ]);

      if (deleteTodo.rows?.length) {
        return deleteTodo.rows[0];
      }
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
