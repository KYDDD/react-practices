import GlobalLayout from "@/components/global-layout";

import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout }) {
  //별도의 레이아웃을 적용하기 위해 호출
  //getLayout이 없을떄를 대비해 예외처리
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
