import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import { ThemeContext, themes } from "../../ThemeContext";
import { useContext } from "react";
import "./style.scss";

const ThemeSwitch = (props) => {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;
  const onChangeThemeHandler = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <div className="theme-switch">
      <img src={iconSun} alt="light-mode" />
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={theme === themes.dark}
          onChange={onChangeThemeHandler}
        />
        <span className="slider round"></span>
      </label>
      <img src={iconMoon} alt="dark-mode" />
    </div>
  );
};

export default ThemeSwitch;
