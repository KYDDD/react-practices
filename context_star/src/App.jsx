import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    //이렇게 하게 되면 themeContext로 감싸는 모든 하위 컴포넌트는 우리가 value로 집어넣어준 값들에 접근할수 있게된다.
    <UserContext value={"사용자"}>
      <ThemeContext value={{ isDark, setIsDark }}>
        <Page></Page>;
      </ThemeContext>
    </UserContext>
  );
}

export default App;
