import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  selectCount,
  selectIsDarkTheme,
} from "../redux/appManagerSlice";
import "../styles/AddTodoForm.css";

const AddTodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
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

  return (
    <form
      className={`todoFormContainer ${
        isDarkTheme ? "darkTheme" : "lightTheme"
      }`}
      onSubmit={handleSubmit}
    >
      <input className="checkbox" type="checkbox" id="checkbox" />
      <input
        className="todoForm"
        placeholder="Create a new todo..."
        value={todo}
        type="text"
        id="todo"
        onChange={onInput}
      />
    </form>
  );
};

export default AddTodoForm;
