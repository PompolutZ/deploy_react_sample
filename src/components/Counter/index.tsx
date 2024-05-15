import { useState } from "react";
import "./index.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <button className="btn square" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn square" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};
