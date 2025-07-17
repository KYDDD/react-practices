import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  //nav에 인수로 -1을 지정해주면 페이지를 뒤로 이동시켜줌
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    //뒤로가기를 방지하면서 이동
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default New;
