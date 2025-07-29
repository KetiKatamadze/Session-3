import { useState } from "react";
import Button from "./button.jsx";
import Wrapper from "./Wrapper";

function CounterWidget() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((current) => current + 1);
  };

  const decrement = () => {
    setCount((current) => {
        if (current > 0) {
            return current - 1;
        }
        return current;
    });
};
  const reset = () => {
    setCount((current) => current = 0);
  };

  return (
    <div className="counter-widget">
      <h1>დინამიური მრიცხველი</h1>
      <span>{count}</span>
      <Wrapper>
        <Button color="#4caf50" text="გაზრდა" click={increment} />
        <Button color="#ddbe33" text="შემცირება" click={decrement} />
        <Button color="#c72d2d" text="თავიდან დაწყება"  click={reset}/>
      </Wrapper>
    </div>
  );
}

export default CounterWidget;
