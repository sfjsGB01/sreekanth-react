import React from "react";

const ThemedComponent = ({ theme }) => {
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
