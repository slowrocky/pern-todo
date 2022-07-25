import React, { Fragment, useEffect, useState } from "react";

//components
import EditTodo from "./EditTodo";

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("https://localhost:3000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`https://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (deleteTodo) {
        setTodos(todos.filter(todo => todo.tid !== id));
      }      
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  },[]);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.tid}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.tid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
