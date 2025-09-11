// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useRef, useState } from "react";
// 비슷한 여러개의 state가 있을때는 하나의 객체값으로 묶어서 관리
export default function Registor() {
  const countRef = useRef(0);

  const inputRef = useRef();

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  //여러개의 비슷하게 생긴 이벤트 핸드러들은 통합 이벤트 핸들러로 묶어 줄수 있다.
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 dom요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input name="name" ref={inputRef} value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange} id="">
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
