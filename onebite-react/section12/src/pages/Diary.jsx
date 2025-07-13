import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log("파람스", params);
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
