import { useContext } from "react";
import { TodosContext } from "../globalContext/TodosContext";
import "./single-todo.css";

const SingleTodo = ({ todo }) => {
  const { setShowTodoClicked, setCurrentTodo } = useContext(TodosContext);

  return (
    <>
      <div className="todo-container">
        <p>{todo.task}</p>
        <button
          onClick={() => {
            setShowTodoClicked(true);
            setCurrentTodo(todo);
          }}
        >
          show
        </button>
      </div>
    </>
  );
};

export default SingleTodo;
