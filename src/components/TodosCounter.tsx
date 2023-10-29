import { useDispatch, useSelector } from "react-redux";
import { selectTodos, completeTodos } from "../redux/appManagerSlice";
import "../styles/TodosCounter.css";

const TodosCounter = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  //calculate the total todos
  const total = todos.filter((todo) => !todo.isDone).length;

  //Clear completed todos
  const clearCompleted = () => {
    dispatch(completeTodos(null));
  };

  return (
    <>
      <div className="todosCounter">
        <p className="counter"> {total} items left </p>
        <button className="clearButton" onClick={() => clearCompleted()}>
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default TodosCounter;
