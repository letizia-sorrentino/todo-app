import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../redux/appManagerSlice";
import "../styles/TodosCounter.css";

const TodosCounter = () => {
  //const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  //const count = useSelector(selectCount);

  // const clearCompleted = () => {
  //
  //   dispatch(removeTodo(todosCompleted));
  //   console.log("clear completed");
  // };

  //calculate the total todos
  let total = 0;
  todos.forEach((item) => {
    if (item.id) {
      total++;
    }
  });

  return (
    <>
      <div className="todosCounter">
        <p className="counter"> {total} items left </p>
        <button className="clearButton" onClick={() => clearCompleted}>
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default TodosCounter;
