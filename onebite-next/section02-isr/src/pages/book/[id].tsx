import { useRouter } from "next/router";
import style from "./[id].module.css";
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { notFound } from "next/navigation";
import Head from "next/head";

const mockData = {
  id: 1,
  title: "한 입 크기로 잘라 먹는 리액트",
  subTitle: "자바스크립트 기초부터 애플리케이션 배포까지",
  description:
    "자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.",
  author: "이정환",
  publisher: "프로그래밍인사이트",
  coverImgUrl: "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg",
};

// 동적인 경로를 갖도록 설정된 페이지에 ssg를 적용하려면 반드시 사전렌더링이 진행되기전에 페이지에 존재할수 있는 모든 경로들을 직접 설정하는 작업을 진행해야 한다.
export const getStaticPaths = () => {
  return {
    //어떠한 경로들이 존재할수 있는지를 배열로 반환하도록 설정
    //url파라미터의 값은 반드시 문자열로만 설정해주어야 한다.
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }],
    // fallback: "blocking", //등록해 놓지 않은 것을 ssr방식으로 렌더링
    fallback: true, //blocking + ui를 먼저 전달하고 데이터는 나중에 렌더링(데이터가 없는 폴백상태의 페이지부터 반환)
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  //!를 붙혀서 params가 undefined가 아닐것이라고 단언해준다.
  const id = context.params!.id;

  const book = await fetchOneBook(Number(id));
  // 존재하지 않는 페이지를 요청하면 notfound페이지를 보여줌
  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
};

export default function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  //폴백상태에 있을떄에도 기본적인 메타 태그는 리턴해줄수 있도록 설정해줘야 한다.
  if (router.isFallback) {
    //현재 페이지가 fallback상태일때
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요" />
        </Head>
        <div>로딩중 입니다</div>
      </>
    );
  }
  if (!book) return "문제가 발생했습니다 다시 시도하세요";
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
          <img src={coverImgUrl} alt={title} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author}| {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
