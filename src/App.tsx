import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <div className="AppMain">
        <Header />
        <Todos />
      </div>
      <Footer />
    </>
  );
};

export default App;
