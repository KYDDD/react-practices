import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

// 1. 리액트에서는 여러개의 컴포넌트들이 서로 부모 자식 관계를 가지며 계층 구조를 형성한다.
// 2. 특정 컴포넌트가 다른 컴포넌트로 데이터를 전달하려면 반드시 두 컴포넌트는 부모 자식 관계를 가지고 있어야 한다.
// 3. 하나의 state를 여러 컴포넌트에서 관리할 경우 state는 반드시 컴포넌트들의 공통부모가 되는곳에 만들어야 한다.
// 리액트는 데이터를 위에서 아래로 단방향으로만 흘려 보내기 때문에 이것을 고려하여 데이터의 원천인 state를 어떤 컴포넌트에 위치시킬 것인지 항상 잘 고민하고 고려해서 결정해야 한다.
function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Couter</h1>
      <section>
        <Viewer count={count}></Viewer>
      </section>

      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
