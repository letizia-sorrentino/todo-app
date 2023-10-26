import mobileBackground from "../assets/bg-mobile-light.jpg";
import iconMoon from "../assets/icon-moon.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <img className="headerImage" src={mobileBackground} alt="mobile-light" />
      <div className="headerContainer">
        <h1 className="appTitle">TODO</h1>
        <img className="iconMoon" src={iconMoon} alt="icon-moon" />
      </div>
    </>
  );
};

export default Header;
