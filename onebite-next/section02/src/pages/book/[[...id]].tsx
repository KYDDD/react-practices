import { useRouter } from "next/router";
export default function Page() {
  //전달된 url파라미터 값을 컴포넌트 내부에서 사용
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <h1>Book {id ? id[0] : ""}</h1>;
}
