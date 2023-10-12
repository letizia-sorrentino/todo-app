import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/appManagerSlice";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    console.log("clicked");
  };

  return (
    <>
      <div>
        <h1>TO DO</h1>
        <input
          className="todoForm"
          type="text"
          id="todo"
          value={todo}
          onChange={onInput}
        />
        <button className="primaryButton" type="submit" onClick={handleCLick}>
          submit
        </button>
      </div>
    </>
  );
};

export default Todos;
