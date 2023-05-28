import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const operator = ["*", "/", "+", "-", "%"];
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },

    {
      className: "0",
      label: "0",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "*",
      label: "*",
    },
  ];

  const handleButtonClick = (value) => {
    if (value === "AC") {
      return setDisplayValue("");
    }
    if (value === "←") {
      return setDisplayValue(displayValue.slice(0, -1));
    }
    if (value === "=") {
      const lastChar = displayValue.slice(-1);
      let tempStr = displayValue;
      if (operator.includes(lastChar)) {
        tempStr = displayValue.slice(0, -1);
      }
      const total = eval(tempStr);
      console.log(typeof total);
      return setDisplayValue(total.toString());
    }

    if (operator.includes(value)) {
      //if there is no input can not add operator
      if (!displayValue) return;
      const lastChar = displayValue.slice(-1);
      let tempStr = displayValue.slice(0, -1);
      if (operator.includes(lastChar)) return setDisplayValue(tempStr + value);

      setLastOperator(value);
    }

    if (value === ".") {
      const lastChar = displayValue.slice(-1);
      if (operator.includes(lastChar)) return;
      const lastIndexOfOp = displayValue.lastIndexOf(lastOperator);
      const tempString = displayValue.slice(lastOperator);
      if (tempString.includes(".")) return;
    }
    return setDisplayValue(displayValue + value);
  };

  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}

        {/* <Button className={"ac"} label="AC" />
        <Button className={"c"} label="←" />
        <Button className={"perc"} label="%" /> */}

        {/* <div className="btn btn-c">←</div>
        <div className="btn btn-perc">%</div>
        <div className="btn btn-divide">/</div>
        <div className="btn btn-7">7</div>
        <div className="btn btn-8">8</div>
        <div className="btn btn-9">9</div>
        <div className="btn btn-x">*</div>
        <div className="btn btn-4">4</div>
        <div className="btn btn-5">5</div>
        <div className="btn btn-6">6</div>
        <div className="btn btn-minus">-</div>
        <div className="btn btn-1">1</div>
        <div className="btn btn-2">2</div>
        <div className="btn btn-3">3</div>
        <div className="btn btn-plus">+</div>
        <div className="btn btn-0">0</div>
        <div className="btn btn-dot">.</div>
        <div className="btn btn-equals">=</div> */}
      </div>
    </div>
  );
};
