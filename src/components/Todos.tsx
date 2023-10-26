import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  tickTodo,
  selectCount,
  selectTodos,
  selectIsDarkTheme,
} from "../redux/appManagerSlice";
import iconCross from "../assets/icon-cross.svg";
import "../styles/Todos.css";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(""); //clear the input field
    console.log("item added", count);
  };

  const onTicked = (id: number) => {
    dispatch(tickTodo(id));
    console.log("todo checked");
  };

  const onTodoDone = (id: number) => {
    dispatch(removeTodo(id));
    console.log("item removed");
  };

  return (
    <>
      <form
        className={`todoFormContainer ${
          isDarkTheme ? "darkTheme" : "lightTheme"
        }`}
        onSubmit={handleSubmit}
      >
        <input
          className="todoForm"
          placeholder="Create a new todo..."
          value={todo}
          type="text"
          id="todo"
          onChange={onInput}
        />
      </form>

      <div
        className={`todoContainer ${isDarkTheme ? "darkTheme" : "lightTheme"}`}
      >
        {count > 0 &&
          todos.map((item) => {
            return (
              <div className="todoList" key={item.id}>
                {" "}
                <input
                  className="todoItem"
                  type="radio"
                  onClick={() => onTicked(item.id)}
                ></input>
                <label
                  className={item.isDone ? "strike" : ""}
                  htmlFor="InputId"
                >
                  {" "}
                  {item.name}
                </label>
                <img
                  className="iconCross"
                  src={iconCross}
                  alt="cross-icon"
                  key={item.id}
                  onClick={() => onTodoDone(item.id)}
                />
              </div>
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

      <div className={`todoMenu ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <p className="menuItem">All</p>
        <p className="menuItem">Active</p>
        <p className="menuItem">Completed</p>
      </div>
    </>
  );
};

export default Todos;
