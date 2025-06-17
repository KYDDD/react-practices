import "./App.css";
import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setActive((a) => !a)}>Toggle Active</button>
      <p>Count: {count}</p>
      <Child active={active} onClick={handleClick} />
    </>
  );
}
export default App;
