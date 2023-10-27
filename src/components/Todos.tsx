import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  checkTodo,
  selectCount,
  selectTodos,
  selectIsDarkTheme,
} from "../redux/appManagerSlice";
import iconCross from "../assets/icon-cross.svg";
import "../styles/Todos.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);
  const isDarkTheme = useSelector(selectIsDarkTheme);

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
      <div
        className={`todoContainer ${isDarkTheme ? "darkTheme" : "lightTheme"}`}
      >
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

        <div
          className={`todoCounter ${isDarkTheme ? "darkTheme" : "lightTheme"}`}
        >
          <p className="counter"> items left </p>
          <p className="clearButton">Clear Completed</p>
        </div>
      </div>
    </>
  );
};

export default Todos;
