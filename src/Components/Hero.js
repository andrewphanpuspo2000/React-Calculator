import { useState } from "react";
import { Form } from "./Form";
import { Realtime } from "./Realtime";
import { Aftersubmit } from "./Aftersubmit";
import { Increase } from "./Increase";
import { Decrease } from "./Decrease";
import { Reset } from "./Reset";
export const Hero = () => {
  let init = 0;
  const [counter, setCounter] = useState(init);
  const [text, setText] = useState("inputval");
  const [displayValue, setDisplayValue] = useState("");
  //   const [ ] = useState(init);
  //   console.log("State is", state);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const plusTwo = () => {
    setCounter(counter + 2);
  };
  const reset = () => {
    setCounter(0);
  };
  function handleChange(event) {
    // setText("hello now");
    console.log(event);
    setText(event.target.value);
  }
  function onSubmitValue(event) {
    setDisplayValue(text);
    event.preventDefault();
  }
  return (
    <div>
      {/* main */}
      <h2>Counter Application</h2>
      <h3>Initial Value:{counter}</h3>
      <Increase increaseByOne={() => setCounter(counter + 1)} />
      <Decrease decreaseByOne={handleDecrement} />
      <Reset increase={plusTwo} />
      <button onClick={reset}>reset</button>
      <hr />
      {/* prompt by passing value */}
      <Form
        value={text}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />
      <Realtime textval={text} />
      <Aftersubmit textdis={displayValue} />
    </div>
  );
};
