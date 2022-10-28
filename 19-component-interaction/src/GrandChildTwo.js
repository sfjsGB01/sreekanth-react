import React from "react";

import ThemedComponent from "./ThemedComponent";

const GrandChildTwo = ({ theme }) => {
  return (
    <div className="grand-child-2">
      Grand Chile Two
      <ThemedComponent theme={theme} />
    </div>
  );
};

export default GrandChildTwo;
