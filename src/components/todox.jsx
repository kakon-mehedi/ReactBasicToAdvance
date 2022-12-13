import React from "react";

function todox({ todo, id }) {
  const handleEditClick = (id) => {
    // const currentTodo2 = todos.filter((todo) => todos.id === id);
    // // setCurrentTodo(currentTodo2[0].todo);
    // console.log(currentTodo2);
    alert("Edit clicked");
  };
  return (
    <div>
      <ul>
        <li>
          {todo} <button onClick={handleEditClick(id)}>Edit</button>
        </li>
      </ul>
    </div>
  );
}

export default todox;
