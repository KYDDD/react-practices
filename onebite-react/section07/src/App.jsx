import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

//useEffect를 사용하면 컴포넌트 내부에서 어떠한 값이 변경되었을때 내가 원하는 동작을 수행하도록 하게 할수 있다.
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);
  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Couter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count}></Viewer>
        {count % 2 === 0 ? <Even></Even> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
