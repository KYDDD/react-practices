import { useRouter } from "next/router";
//컴포넌트 내부에서 쿼리스트링의 값을 사용하기 위해서 useRouter훅을 사용

export default function Page() {
  // 라우터 객체에는 대부분의 라우팅과 관련된 정보가 저장되어 있다.
  const router = useRouter();

  //쿼리스트링의 값을 꺼내옴
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
