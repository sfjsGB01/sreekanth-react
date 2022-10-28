import React from "react";

const ThemeToggler = ({ toggleMethod }) => {
  return (
    <div className="theme-toggler">
      <input
        type="button"
        onClick={() => toggleMethod("test information")}
        value="Toggle Theme"
      />
    </div>
  );
};

export default ThemeToggler;
