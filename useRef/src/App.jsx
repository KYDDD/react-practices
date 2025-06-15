import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수: ", renderCount.current);
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </>
  );
};

export default App;
