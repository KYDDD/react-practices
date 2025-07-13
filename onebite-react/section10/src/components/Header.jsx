import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </header>
  );
};

// 이렇게 설정해주면 자신이 받는 props가 변경되지 않으면 다시는 리렌더링이 발생하지 않음
export default memo(Header);
