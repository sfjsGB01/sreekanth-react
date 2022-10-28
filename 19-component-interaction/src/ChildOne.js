import React from "react";

import GrandChildOne from "./GrandChildOne";
import GrandChildTwo from "./GrandChildTwo";

const ChildOne = ({ theme }) => {
  return (
    <div className="child">
      <GrandChildOne />

      <GrandChildTwo theme={theme} />
    </div>
  );
};

export default ChildOne;
