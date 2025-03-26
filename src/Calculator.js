import React, { useState } from "react";
import Display from "./c/Display";
import Buttons from "./Buttons";
import "./index.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
