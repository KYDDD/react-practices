import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

// export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정
// 1. auto : 기본값, 아무것도 강제하지 않음
// 2. force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static : 페이지를 강제로 static 페이지로 설정
// 4. error : 페이지를 강제로 static 페이지 설정(설정하면 안되는 이슈 -> 빌드오류 발생시킴)
// 이런 옵션들은 잘 권장되지는 않지만 그래도 알고라도 있으면 나중에 페이지의 캐싱을 실험해보거나 무조건 static, dynamic옵션으로 설정되어야 하는페이지에 일단 설정하고 나중에 천천히 고쳐나갈수 있다. 알고는 있되 꼭 필요한 경우에만 사용하자

async function AllBooks() {
  //캐시 설정을 해주지 않으면 기본값으로써 그냥 캐시 되지 않는걸로 동작한다.
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "force-cache" });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  //특정시간을 주기로 캐시를 업데이트함 page router의 isr과 비슷
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, { next: { revalidate: 3 } });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
