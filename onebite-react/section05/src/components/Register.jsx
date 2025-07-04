//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

import { useState } from "react";

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  //여러개의 state로 관리하던 4가지의 데이터를 객체형태로 만듬
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 비슷하게 동작하는 이벤트 핸들러들을 하나의 통합된 이벤트 핸들러로 사용할수 있다.
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // e.target.name에 저장되어 있는 값으로 프로퍼티의 key를 설정하겠다.
    });
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input, //스프레드 연산자를 사용해서 관련없는 값들은 그대로 유지되도록 만들어줌
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input, //스프레드 연산자를 사용해서 관련없는 값들은 그대로 유지되도록 만들어줌
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input, //스프레드 연산자를 사용해서 관련없는 값들은 그대로 유지되도록 만들어줌
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input, //스프레드 연산자를 사용해서 관련없는 값들은 그대로 유지되도록 만들어줌
  //     bio: e.target.value,
  //   });
  // };

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
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        {input.bio}
      </div>
    </div>
  );
};

export default Register;
