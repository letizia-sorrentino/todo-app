import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../redux/appManagerSlice";
import "../styles/TodosMenu.css";

const TodosMenu = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className={`todosMenu ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <p className="menuItem">All</p>
        <p className="menuItem">Active</p>
        <p className="menuItem">Completed</p>
      </div>
    </>
  );
};

export default TodosMenu;
