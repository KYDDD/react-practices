import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

import Button from "./components/button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home페이지
// 2. "/new" : 새로운 일기를 작성하는 NEW페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
function App() {
  //특정 조건에 따라서 페이지를 이동시켜야 할때 사용
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    // 1. routes컴포넌트 안에는 route컴포넌트만 들어갈수 있다.
    // 2. routes컴포넌트 바깥에 배치된 요소들은 페이지 라우팅 과는 관련없이 모든 페이지에 다 동일하게 랜더링 된다.
    // 3. 모든 페이지에 랜더링될 요소가 아니라면 routes컴포넌트 바깥에 배치하는것은 적절하지 않다.
    <>
      <Header title={"Header"} leftChild={<Button text={"Left"} />} rightChild={<Button text={"right"} />}></Header>
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      ></Button>

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      ></Button>

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      ></Button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* 동적경로설정 */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        {/* path에 *을찍어주게 되면 와일드카드라고 해서swtich의 default처럼 동작 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
