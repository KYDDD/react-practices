import Header from "../components/Header";
import Button from "../components/button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

//현재 설정된 달에 해당하는 일기데이터만 추출해서 반환, 가독성을 위해, 불필요한 함수의 재생성을 위해 컴포넌트 외부에 선언
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle("감정 일기장");

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      ></Header>
      <DiaryList data={monthlyData}></DiaryList>
    </div>
  );
};

export default Home;
