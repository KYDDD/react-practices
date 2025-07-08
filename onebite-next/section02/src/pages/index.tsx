// CSS Module
import style from "./index.module.css";
//css모듈을 사용하면 페이지 별로 클래스 네임이 겹쳐서 발생할수 있는 문제를 자동으로 유니크한 클래스 네임으로 변환해 줌으로서 쉽게 해결을 할 수 있다.
export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}
