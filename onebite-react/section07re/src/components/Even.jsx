import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    //클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수 입니다.</div>;
}
