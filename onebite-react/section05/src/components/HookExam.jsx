// 3가지 hook 관련된 팁
// 1. 함수컴포넌트, 커스텀 훅 내부에서만 호출이 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅을 직접 만들수 있다.
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      {input}
      <input type="text" value={input2} onChange={onChange2} />
      {input2}
    </div>
  );
};

export default HookExam;
