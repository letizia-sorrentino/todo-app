import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectIsDarkTheme } from "../redux/appManagerSlice";
import "../styles/FilterButtons.css";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  const handleFilter = (newFilter: string) => {
    dispatch(setFilter(newFilter));
    console.log(newFilter);
  };

  return (
    <>
      <div className={`todosMenu ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <button
          className={`filter === "all" ? "active" : ""`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter === "active" ? "active" : ""`}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          className={`filter === "completed" ? "active" : ""`}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default FilterButtons;
