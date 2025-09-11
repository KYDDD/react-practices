import { useRef, useState } from "react";
import "./Editor.css";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
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
