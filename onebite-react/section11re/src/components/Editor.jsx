import { useRef, useState, useContext } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

export default function Editor() {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const { onCreate } = useContext(TodoDispatchContext);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..." type="text" />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
