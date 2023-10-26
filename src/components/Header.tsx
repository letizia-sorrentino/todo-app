import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "../redux/appManagerSlice";
import mobileLight from "../assets/bg-mobile-light.jpg";
import mobileDark from "../assets/bg-mobile-dark.jpg";
import desktopLight from "../assets/bg-desktop-light.jpg";
import desktopDark from "../assets/bg-desktop-dark.jpg";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import "../styles/Header.css";

const Header = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <>
      <img
        className="headerImage"
        src={isDarkTheme ? mobileDark : mobileLight}
        alt="mobile-background"
      />
      <img
        className="headerImageDesktop"
        src={isDarkTheme ? desktopDark : desktopLight}
        alt="desktop-background"
      />
      <div className="headerContainer">
        <h1 className="appTitle">TO DO</h1>
        <img
          onClick={() => {
            dispatch(toggleTheme());
          }}
          className="iconMode"
          src={isDarkTheme ? iconSun : iconMoon}
          alt="icon-mode"
        />
      </div>
    </>
  );
};

export default Header;
