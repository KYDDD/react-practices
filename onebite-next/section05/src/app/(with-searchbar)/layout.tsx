import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* suspense로 감싸준 컴포넌트는 사전렌더링 과정에서 배제된다. 오직 클라이언트 측에서만 렌더링됨 */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
