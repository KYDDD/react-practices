import "./App.css";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
