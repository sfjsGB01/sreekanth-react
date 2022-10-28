import React, { useContext } from "react";

import { ThemeContext } from "./App";

const ThemeToggler = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <input
        type="button"
        onClick={themeContext?.toggleTheme}
        value="Toggle Theme"
      />
    </div>
  );
};

export default ThemeToggler;
