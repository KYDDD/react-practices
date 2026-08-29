// 간단한 회원가입 폼

import { useState } from "react";

//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // e.target.name에는 이벤트가 발생한 태그의 name 속성에 설정된 값이 들어있음.
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
}

export default Register;
