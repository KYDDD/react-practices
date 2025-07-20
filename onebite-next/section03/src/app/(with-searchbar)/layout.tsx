import { ReactNode } from "react";

//레이아웃 컴포넌트를 직접 구성할때에는 반드시 children이라는 프롭스를 통해서 전달받아서 어디에다가 렌더링 할건지 직접 배치를 시켜줘야한다.
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
