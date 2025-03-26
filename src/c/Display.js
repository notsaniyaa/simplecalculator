import React from "react";

const Display = ({ expression }) => {
  return <div className="display">{expression || "0"}</div>;
};

export default Display;

