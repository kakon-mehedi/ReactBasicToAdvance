import React, { useState } from "react";
import { todosData } from "./../data";
import "./todo.css";

function Todo() {
  const [input, setInput] = useState("");
  const [currentTodo, setCurrentTodo] = useState();
  const [todos, setTodos] = useState(todosData);
  const [editClicked, setEditClicked] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editClicked) {
      handleUpdateClick(currentTodo[0].id, input);
      setEditClicked(false);
    } else {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    const newTodo = {
      id: todos.length,
      todo: input,
    };

    todos.push(newTodo);
    setInput("");
  };

  const handleEditClick = (id) => {
    const currentTodo2 = todos.filter((todo) => todo.id === id);
    setCurrentTodo(currentTodo2);
    setEditClicked(true);
    setInput(currentTodo2[0].todo);
  };

  const handleUpdateClick = (id, input) => {
    const currentTodo2 = todos.filter((todo) => todo.id === id);
    currentTodo2[0].todo = input;
    setInput("");
  };

  const handleDeleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit">
          {editClicked ? "Update todo" : "Add todo"}
        </button>
      </form>

      <ul className="show-todos">
        {todos.map((todo) => {
          return (
            <li className="todo" key={todo.id}>
              {todo.todo}
              <button
                onClick={() => {
                  handleEditClick(todo.id);
                }}
              >
                Edit
              </button>

              <button
                onClick={() => {
                  handleDeleteClick(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
