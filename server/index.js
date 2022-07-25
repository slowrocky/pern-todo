const express = require("express");
const app = express();
require("dotenv").config();
const {
  server: { PORT },
} = require("./config");
const loader = require('./loaders')



//middleware

//app.use(express.static(path.join(__dirname + "//public")));
//app.use(cors());
//app.use(express.json());
loader(app);

// ROUTES

//create a todo
/*
app.post("/todos", async (req, res) => {
  try {
    const client = await pool.connect();
    const { description } = req.body;
    const newTodo = await client.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
    await client.end();
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const client = await pool.connect();
    const todos = await client.query("SELECT * FROM todo");
    res.json(todos.rows);
    await client.end();
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const client = await pool.connect();
    const { id } = req.params;
    const todo = await client.query("SELECT * FROM todo WHERE tid = $1", [id]);
    res.json(todo.rows[0]);
    await client.end();
  } catch (error) {
    console.error(error.message);
  }
});
//update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const client = await pool.connect();
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await client.query(
      "UPDATE todo SET description = $1 WHERE tid = $2",
      [description, id]
    );
    res.json("Todo was updated.");
    await client.end();
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const client = await pool.connect();
    const { id } = req.params;
    const deleteTodo = await client.query("DELETE FROM todo WHERE tid = $1", [
      id,
    ]);
    res.json("Todo was deleted.");
    await client.end();
  } catch (error) {
    console.error(error.message);
  }
});
*/
app.listen(PORT || 3000, () => {
  console.log(`Server has started on port ${PORT}`);
});
