import React from "react";
export const themes = {
  dark: "dark-mode",
  light: "light-mode",
};
export const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: (val) => {},
});
