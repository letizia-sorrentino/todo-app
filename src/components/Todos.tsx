import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  selectCount,
  selectTodos,
} from "../redux/appManagerSlice";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(""); //clear the input field
    console.log("item added", count);
  };

  const onTodoDone = (id: number) => {
    dispatch(removeTodo(id));
    console.log("item removed");
  };

  return (
    <>
      <form className="todoFormContainer" onSubmit={handleSubmit}>
        <input
          className="todoForm"
          placeholder="Create a new todo..."
          value={todo}
          type="text"
          id="todo"
          onChange={onInput}
        />
      </form>

      <div className="todoContainer">
        {count > 0 &&
          todos.map((item) => {
            return (
              <>
                <div className="todoList">
                  {" "}
                  <input
                    className="todoItem"
                    type="radio"
                    key={item.id}
                    onClick={() => onTodoDone(item.id)}
                  ></input>
                  <label htmlFor="InputId"> {item.name}</label>;
                </div>
              </>
            );
          })}
        {count === 0 && <></>}
      </div>
    </>
  );
};

export default Todos;
