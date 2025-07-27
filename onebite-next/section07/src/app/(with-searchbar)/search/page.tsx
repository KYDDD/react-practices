import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";

// export const dynamic = "error"; //현재 페이지를 static페이지를 변환하려고 하지만 만약에 그렇지 못할 이유가 있으면 빌드시에 오류를 발생시킨다
// export const dynamic = "static"; // 쿼리스트링에 의존하고 있는 페이지를 이런식으로 강제로 static페이지로 만들어주게되면 검색기능이 제대로 동작하지 않는 문제가 생긴다.

async function SearchResult({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;

  await delay(1500);
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

//searchParams는 페이지 컴포넌트에 자동으로 제공되는 현재 페이지의 쿼리스트링ㄱ
// 현재 페이지는 동적인 값에 의존하고 있어 풀 라우트 캐시는 불가능 하지만 , 데이터 캐시만 적용해서 최적화 할수는 있음
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  return (
    // suspense에 key값을 설정해주면 q값이 바뀔때마다 fallback이 보여지게된다
    // 원래 suspense는 최초로한번 내부 컴포넌트의 로딩이 완료된 이후에는 내부에 어떠한 컨텐츠가 변경된다고 하더라도 기본적으로 새롭게 다시 로딩상태로 돌아가지 않는다.
    <Suspense key={q || ""} fallback={<BookListSkeleton count={3} />}>
      <SearchResult searchParams={searchParams || ""} />
    </Suspense>
  );
}

//이이 페이지와 동일한 경로에 loading.tsx를 만들어주면 동일한 경로에 있는 페이지 컴포넌트뿐만 아니라 해당 경로 아래에 잇는 모든 비동기 컴포넌트들을 전부 다 자동으로 스트리밍 되도록 설정해줄수 있다.
//loading.tsx는 무조건 페이지 컴포넌트에게만 스트리밍을 적용할수 있다.
// 페이지의 경로가 옮겨진게 아니라 쿼리스트링의 값만 바뀐거라면 스트리밍이 동작하지 않는다.
