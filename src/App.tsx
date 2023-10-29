import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./redux/appManagerSlice";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import Footer from "./components/Footer";
import AddTodoForm from "./components/AddTodoForm";
import FilterButtons from "./components/FilterButtons";
import TodosCounter from "./components/TodosCounter";
import "./styles/App.css";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <div className="AppMain">
          <Header />
          <AddTodoForm />
          <div className="todoContainer">
            <TodosList />
            <TodosCounter />
          </div>
          <FilterButtons />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
