import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (
      //확인을 클릭하면 true가 반환되고 취소를 클릭하면 false가 반환된다
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      //일기삭제로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
      ></Header>

      <Editor initData={curDiaryItem} onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default Edit;
