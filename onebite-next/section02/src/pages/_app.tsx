import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// app컴포넌트는 모든 페이지 컴포넌의 부모 역할을 하기 때문에
// 전체 페이지에 공통적으로 포함되는 헤더나 레이아웃을 렌더링 하거나 비즈니스 로직을 작성할수 있는 공간이다.
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    //router객체의 push메서드는 인수로 전달받은 경로로 페이지를 클라이언트 사이드 렌더링 방식으로 이동시켜줌
    // 이런식으로 함수 내부에서도 페이지를 클라이언트 사이드 방식으로 이동시킬수 있다.
    router.push("/test");
  };

  //내가 직접 마운트 될떄 프리패칭이 되도록 명시해줄수 있음
  //router객체의 prefetch메서드를 통해서 특정 페이지를 명시적으로 프리패칭 하도록 설정해줄수 있다.
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        {/* Link컴포넌트로 명시된 경우가 아니라면 프리패칭이 이루어지지 않음 */}
        <Link href={"/"}>index</Link>
        &nbsp;
        {/* 자동으로 프리패칭 되는것을 프리패칭 되지 않도록 설정해주는 방법 */}
        <Link href={"search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
