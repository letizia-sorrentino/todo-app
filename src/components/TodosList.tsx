import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  checkTodo,
  selectCount,
  selectTodos,
  selectFilter,
} from "../redux/appManagerSlice";
import iconCross from "../assets/icon-cross.svg";
import "../styles/TodosList.css";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);
  const filter = useSelector(selectFilter);

  const onTodoChecked = (id: number) => {
    dispatch(checkTodo(id));
  };

  const onTodoDone = (id: number) => {
    dispatch(removeTodo(id));
  };

  //filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.isDone;
    } else if (filter === "completed") {
      return todo.isDone;
    } else {
      return true;
    }
  });

  return (
    <>
      {count > 0 ? (
        filteredTodos.map((todo) => (
          <ul className="todoList" key={todo.id}>
            <li className="todoItem" key={todo.id}>
              {" "}
              <input
                onClick={() => onTodoChecked(todo.id)}
                className={todo.isDone ? "done" : "undone"}
                type="checkbox"
              />{" "}
              <label
                className={todo.isDone ? "textStriked" : "text"}
                htmlFor="InputId"
              >
                {todo.name}
              </label>
              <img
                className="iconCross"
                src={iconCross}
                alt="cross-icon"
                onClick={() => onTodoDone(todo.id)}
              />
            </li>
          </ul>
        ))
      ) : (
        <p>No todos yet.</p>
      )}
    </>
  );
};

export default TodosList;
