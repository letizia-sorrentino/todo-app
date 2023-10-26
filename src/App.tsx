import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./redux/appManagerSlice";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <>
      <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
        <div className="AppMain">
          <Header />
          <Todos />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
