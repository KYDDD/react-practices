import "./App.css";
import Button from "./components/Button";
import HookExam from "./components/HookExam";
import Register from "./components/Register_ref";

function App() {
  return (
    <>
      <HookExam></HookExam>
      <Button text="버튼임" color="pink">
        나이스
      </Button>
    </>
  );
}

export default App;
