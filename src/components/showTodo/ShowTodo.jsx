import { useContext } from "react";
import { TodosContext } from "../globalContext/TodosContext";
import "./showTodo.css";

const ShowTodo = ({ todo }) => {
  const { setShowTodoClicked } = useContext(TodosContext);
  const handleCloseClick = () => {
    setShowTodoClicked(false);
  };
  return (
    <div className="show-todo-container">
      <p className="id">Id : {todo.id} </p>
      <p className="task">Task : {todo.task}</p>

      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
};

export default ShowTodo;
