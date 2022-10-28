import React from "react";

import ThemeToggler from "./ThemeToggler";
import ChildOne from "./ChildOne";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="theming-root"
      style={{ backgroundColor: "lightblue", height: "200px" }}
    >
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        <ThemeToggler />

        <ChildOne />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
