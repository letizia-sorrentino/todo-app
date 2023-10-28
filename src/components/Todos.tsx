import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  checkTodo,
  selectCount,
  selectTodos,
} from "../redux/appManagerSlice";
import iconCross from "../assets/icon-cross.svg";
import "../styles/Todos.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);

  const onTodoChecked = (id: number) => {
    dispatch(checkTodo(id));
    console.log("todo checked");
  };

  const onTodoDone = (id: number) => {
    dispatch(removeTodo(id));
    console.log("item removed");
  };

  return (
    <>
      {count > 0 &&
        todos.map((item) => {
          return (
            <ul className="todoList">
              <li className="todoItem" key={item.id} draggable="true">
                {" "}
                <input
                  onClick={() => onTodoChecked(item.id)}
                  className={item.isDone ? "checkbox:checked" : "checkbox"}
                  type="checkbox"
                />{" "}
                <label
                  className={item.isDone ? "textStriked" : "text"}
                  htmlFor="InputId"
                >
                  {item.name}
                </label>
                <img
                  className="iconCross"
                  src={iconCross}
                  alt="cross-icon"
                  key={item.id}
                  onClick={() => onTodoDone(item.id)}
                />
              </li>
            </ul>
          );
        })}
      {count === 0 && (
        <>
          <p>No todos yet.</p>
        </>
      )}
    </>
  );
};

export default Todos;
