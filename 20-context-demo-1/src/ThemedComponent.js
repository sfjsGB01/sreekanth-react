import React from "react";

import { ThemeContext } from "./App";

const ThemedComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  const { theme } = themeContext;

  return (
    <div
      className="themed-component"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Theme Test</h1>
    </div>
  );
};

export default ThemedComponent;
