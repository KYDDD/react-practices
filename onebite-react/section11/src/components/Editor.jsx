import { useRef, useState, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content.trim() === "") {
      setError(true);
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
    setError(false);
  };
  return (
    <>
      <section className="Editor">
        <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} type="text" placeholder="새로운 Todo..." />
        <button onClick={onSubmit}>추가</button>
      </section>
      {error ? <div style={{ color: "red" }}>다시입력해주세요</div> : ""}
    </>
  );
};

export default Editor;
