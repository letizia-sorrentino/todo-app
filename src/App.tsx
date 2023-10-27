import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./redux/appManagerSlice";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodoForm from "./components/AddTodoForm";
import TodosMenu from "./components/TodosMenu";
import "./styles/App.css";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <div className="AppMain">
          <Header />
          <AddTodoForm />
          <Todos />
          <TodosMenu />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
