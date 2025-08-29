"use client";

//error.tsx파일도 레이아웃이나 로딩 파일 처럼 동일한 경로 뿐만 아니라 하위의 모든 경로에 동일하게 적용이 된다.
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

// 에러 컴포넌트를 클라이언트 컴포넌트로 설정해줘야 하는 이유는 기본적으로 오류는 서버든 클라이언트든 어떤 환경이든 다 발생할수 있기 때문에 서버 측 오류든 클라이언트 측 오류든 다 대응 할수 있게 하기 위해서 이다.
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          //하나의 콜백함수를 인수로 전달받아 콟개함수 안에 들어있는 ui를 변경시키는 작업들을 모두 일괄적으로 처리해준다
          startTransition(() => {
            router.refresh(); //현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴, 현재 페이지에서 서버 컴포넌트만 빠르게 딱 업데이트 시킴
            reset(); // 에러 상태를 초기화, 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
