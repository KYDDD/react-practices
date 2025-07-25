import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { ReactNode, useEffect, useState } from "react";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //쿼리스트링을 불러와서 검색어를 꺼내옴
//   // 쿼리스트링에 어떠한 값이 들어올지는 빌드타임에 알아낼 방법이 없다.
//   const q = context.query.q;

//   const books = await fetchBooks(q as string);
//   return {
//     props: { books },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      //검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
