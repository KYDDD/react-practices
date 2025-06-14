import { useRef, useState } from "react";

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const refCount = useRef(0);

  const incrementVar = () => {
    refCount.current += 1;
    console.log("Var Count:", refCount.current);
  };

  const syncCounts = () => {
    setCount1(refCount.current);
    setCount2((prev) => prev + 1);
  };

  return (
    <>
      <h2>Counter App</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={incrementVar}>local var</button>
      <button onClick={syncCounts}>useState</button>
    </>
  );
}

export default Counter;
