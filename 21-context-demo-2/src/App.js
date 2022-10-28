import React from "react";

import ThemeToggler from "./ThemeToggler";
import ChildOne from "./ChildOne";

import { ThemeContextProvider } from "./hooks/useTheme";

function App() {
  return (
    <div
      className="theming-root"
      style={{ backgroundColor: "lightblue", height: "200px" }}
    >
      <ThemeContextProvider>
        <ThemeToggler />

        <ChildOne />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
