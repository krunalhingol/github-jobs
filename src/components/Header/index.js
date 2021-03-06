import ThemeSwitch from "../ThemeSwitch";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="app-logo"></div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
