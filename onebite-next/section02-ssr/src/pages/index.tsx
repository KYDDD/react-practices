// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

//넥스트에서 약속된 이름의 프롭스를 만들어서 내보내면 해당 페이지는 ssr로 동작하게 된다.
//사전렌더링을 할때 딱 한번만 실행되기 때문에, 오직 서버측에서만 실행되는 함수이다.
export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 역할을 하는 함수

  const data = "hello";

  console.log("서버사이드 프롭스에요"); //오직 서버측에서만 실행되기 때문에 브라우저에서는 절대 출력되지 않음, 터미널에서 출력

  //무조건 객체타입의 props라는 프로퍼티 안에 써줘야함, 프레임워크의 문법임
  return {
    props: {
      data,
    },
  };
};

// getServerSideProps함수의 반환값 타입을 자동으로 추론해주는 기능을 하는 타입이다.
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  // window.location; //주의, 아무런 조건없이 이렇게 써주면 오류발생, 서버에서 실행될때는 window가 undefined가 되어 버리기 때문
  // 브라우저 측에서만 실행되는 코드를 사용하고 싶으면 useEffect를 사용
  useEffect(() => {
    console.log(window);
  }, []);

  console.log(data);
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
