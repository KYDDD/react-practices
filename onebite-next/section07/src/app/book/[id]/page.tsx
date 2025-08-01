import { notFound } from "next/navigation";
import style from "./page.module.css";
import { ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
// 북페이지처럼 동적 경로를 갖는 페이지를 static으로 설정하려면 generateStaticParams라는 약속된 이름의 함수를 사용해서 return으로 어떠한 url파라미터가 빌드타임에 존재할지를 직접 설정해줄수 있다.

// export const dynamicParams = false; //이렇게 설정해주면 generateStaticParams에 설정해준값 외에는 404페이지로 리다이렉션

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <section>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${id}`, {
    next: { tags: [`review-${id}`] },
  });
  if (!response.ok) {
    throw new Error(`Review fetch failed : 
      ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => {
        return <ReviewItem key={`review-item-${review.id}`} {...review} />;
      })}
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className={style.container}>
      <BookDetail params={params} />
      <ReviewEditor id={id} />
      <ReviewList params={params} />
    </div>
  );
}
