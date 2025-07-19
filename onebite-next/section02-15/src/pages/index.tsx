// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
//css모듈을 사용하면 페이지 별로 클래스 네임이 겹쳐서 발생할수 있는 문제를 자동으로 유니크한 클래스 네임으로 변환해 줌으로서 쉽게 해결을 할 수 있다.
export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

//별도의 레이아웃이 지정되길 원하는 컴포넌트에 이런식으로 추가 할수 있음
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
