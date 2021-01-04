import Header from "./components/Header";
import JobBoard from "./JobBoard";
import "./App.scss";
import { ThemeContext, themes } from "./ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`github-jobs ${theme}`}>
        <Header />
        <JobBoard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
