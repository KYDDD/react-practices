"use client";

import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";

// 초기 상태 정의
const initialState: { status?: boolean; error: string } = {
  // status: false,
  error: "",
};
//서버액션의 목적은 조금 더 간결하고 조금 더 편리하게 서버측에서 실행되는 어떠한 동작을 정의하는데에 있다.
export default function ReviewEditor({ id }: { id: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, initialState);

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        {/* 안보이는 인풋 태그를 만들어줌 */}
        {/* 모든 히든 인풋태그에는 readonly를 추가해준다 */}
        <input name="bookId" value={id} hidden readOnly />
        <textarea disabled={isPending} required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input disabled={isPending} required name="author" placeholder="작성자" type="text" />
          <button disabled={isPending} type="submit">
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
