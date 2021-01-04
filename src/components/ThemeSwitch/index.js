import "./style.css";
import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";

const ThemeSwitch = (props) => {
  const { switchState, handleChange } = props;
  return (
    <div className="theme-switch">
      <img src={iconSun} alt="light-mode" />
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <img src={iconMoon} alt="dark-mode" />
    </div>
  );
};

export default ThemeSwitch;
