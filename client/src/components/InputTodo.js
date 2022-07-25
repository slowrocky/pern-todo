import React, { Fragment, useEffect, useState } from "react";

export const InputTodo = () => {
  const [description, setDescription] = useState("");

  

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (description === "") {
      return;
    }
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location.reload(false)
      //console.log(response);

    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
