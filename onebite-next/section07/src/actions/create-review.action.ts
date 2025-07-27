"use server";

import { delay } from "@/util/delay";
import { revalidatePath, revalidateTag } from "next/cache";

//이렇게 서버 액션을 별도의 파일로 분리
export async function createReviewAction(_: { status?: boolean; error: string }, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  //에외처리, 클라이언트 측에서 한번 빈입력 방지를 해줬지만 서버측에서도 또 해준 이유는 서버도 클라이언트를 완전히 믿을수 없고 클라이언트도 서버를 완전히 믿으면 안되기 때문
  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해 주세요.",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: "POST",

      body: JSON.stringify({ bookId, content, author }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    //revalidatePath를 사용하면 넥스트가 자동으로 인수로 전달한 경로에 해당하는 페이지를 재검증하게 된다., 오직 서버측에서만 호출할수 있는 메서드임

    // 1. 특정 주소에 해당하는 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 동적 페이지를 재검증
    // revalidatePath("/book/[id]", "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath("/(with-searchbar)", "layout");

    // 4. 모든 데이터 재검증
    // revalidatePath("/", "layout");

    //5. 태그 기준, 데이터 캐시 재검증
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
}
