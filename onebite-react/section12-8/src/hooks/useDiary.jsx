import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();
  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      //nav는 컴포넌트가 렌더링이 완료되기 전에 실행하면 x
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
