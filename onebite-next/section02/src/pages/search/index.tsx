import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  //쿼리스트링의 값을 꺼내옴
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
