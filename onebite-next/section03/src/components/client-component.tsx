"use client";

import { ReactNode } from "react";

// 클라이언트 컴포넌트에서 서버컴포넌트를 import 해서 사용하려고 하면 next가 자동으로 해당 컴포넌트를 클라이언트 컴포넌트로 변환시켜 버린다, 클라이언트 컴포넌트의 자식으로 서버 컴포넌트를배치하는 것은 웬만하면 피해라.
// import ServerComponent from "./server-component";
//꼭 이렇게 써야만 하는 경우라면 이방법 대신에 children props로 받아서 사용하는 방법 사용

export default function ClientComponent({ children }: {children: ReactNode}) {
  console.log("클라이언트 컴포넌트");
  return <div>{children}</div>;
}
