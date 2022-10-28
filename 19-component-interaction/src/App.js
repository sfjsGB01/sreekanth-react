import React from "react";

import ThemeToggler from "./ThemeToggler";
import ChildOne from "./ChildOne";

function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = (param) => {
    console.log("param passed child: ", param);
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="theming-root"
      style={{ backgroundColor: "lightblue", height: "200px" }}
    >
      <ThemeToggler toggleMethod={toggleTheme} />

      <ChildOne theme={theme} />
    </div>
  );
}

export default App;
