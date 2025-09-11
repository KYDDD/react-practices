// 3가지 hook관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅을 직접 만들수 있다.
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} type="text" />
    </div>
  );
};

export default HookExam;
