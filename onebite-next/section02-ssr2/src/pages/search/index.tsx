import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { ReactNode } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  //쿼리스트링을 불러와서 검색어를 꺼내옴
  const q = context.query.q;

  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
