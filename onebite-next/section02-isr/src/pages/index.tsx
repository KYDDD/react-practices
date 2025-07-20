import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    // 시간을 기반으로 isr을 적용하는 방법, ssg의 장점 + 일정시간을 주기로 최신의 데이터를 갱신할수 있다는 장점이 있음
    // revalidate: 3,
  };
};

// getStaticProps 함수의 반환값 타입을 자동으로 추론해주는 기능을 하는 타입이다.
export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

//별도의 레이아웃이 지정되길 원하는 컴포넌트에 이런식으로 추가 할수 있음
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
