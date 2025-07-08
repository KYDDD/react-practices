import { Html, Head, Main, NextScript } from "next/document";

// 모든 페이지에 다 적용이 되는 메타 태그를 설정한다거나 폰트를 불러온다거나
export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
