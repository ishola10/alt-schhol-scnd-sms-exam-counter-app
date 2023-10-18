import React from "react";
import useCounter from "../useCounter";
import "../styles/Counter.css";

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
      <h1>
        Counter: <p className="p">{count}</p>
      </h1>
      <div className="wrapper">
        <div className="btn-wrapper">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
        <input
          type="number"
          value={count}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Counter;
