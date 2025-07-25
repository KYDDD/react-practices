import { useEffect, useState } from "react";
import Button from "./button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      //value 값을 date객체로 변환
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <main className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>

        {/* date객체로 설정된 값은 이해를 하지 못함 */}
        <input name="createdDate" onChange={onChangeInput} value={getStringedDate(input.createdDate)} type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)}></Button>
        <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"}></Button>
      </section>
    </main>
  );
};

export default Editor;
