import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  //curDiaryitem이 초기값이 undefined이므로 그거에 대한 처리를 해줘야한다.
  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
      ></Header>
      <Viewer emotionId={emotionId} content={content}></Viewer>
    </div>
  );
};

export default Diary;
