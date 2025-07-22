import BookItem from "@/components/book-item";
import { BookData } from "@/types";

// export const dynamic = "error"; //현재 페이지를 static페이지를 변환하려고 하지만 만약에 그렇지 못할 이유가 있으면 빌드시에 오류를 발생시킨다
// export const dynamic = "static"; // 쿼리스트링에 의존하고 있는 페이지를 이런식으로 강제로 static페이지로 만들어주게되면 검색기능이 제대로 동작하지 않는 문제가 생긴다.

//searchParams는 페이지 컴포넌트에 자동으로 제공되는 현재 페이지의 쿼리스트링ㄱ
// 현재 페이지는 동적인 값에 의존하고 있어 풀 라우트 캐시는 불가능 하지만 , 데이터 캐시만 적용해서 최적화 할수는 있음
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, { cache: "force-cache" });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
