import mobileLight from "../assets/bg-mobile-light.jpg";

const Header = () => {
  return (
    <>
      <h1 className="appTitle">TO DO</h1>
      <img className="headerImage" src={mobileLight} alt="mobileLight" />
    </>
  );
};

export default Header;
