import { useParams } from "react-router-dom";

export default function Edit() {
  const params = useParams();
  return <div>{params.id}번 일기수정 페이지 입니다.</div>;
}
