import React, { useState } from "react";
import { todosData } from "../../data";
import { TodosContext } from "../globalContext/TodosContext";
import ShowTodo from "../showTodo/ShowTodo";
import SingleTodo from "../singleTodo/SingleTodo";
import "./todos.css";

const Todos = () => {
  const [showTodoClicked, setShowTodoClicked] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleBodyClick = () => {};

  return (
    <TodosContext.Provider
      value={{
        setShowTodoClicked,
        setCurrentTodo,
      }}
    >
      <div className="todos-container" onClick={handleBodyClick}>
        <div className="todos">
          {todosData.map((todo) => {
            return <SingleTodo todo={todo} />;
          })}
        </div>

        {showTodoClicked ? (
          <div className="show-todo">
            <ShowTodo todo={currentTodo} />
          </div>
        ) : null}
      </div>
    </TodosContext.Provider>
  );
};

export default Todos;
