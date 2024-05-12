import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
}

export default App;
