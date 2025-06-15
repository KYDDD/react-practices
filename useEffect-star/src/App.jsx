import { useEffect } from "react";
import { useState } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}> Toggle Timer</button>
    </>
  );
}

export default App;
