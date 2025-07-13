import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} id={`todo${id}`} type="checkbox" />
      <label htmlFor={`todo${id}`} className="content">
        {content}
      </label>
      <time className="date">{new Date(date).toLocaleDateString()}</time>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 컴포넌트가 받는props가 바꼈을 때만 컴포넌트를 리렌더링 하도록 최적화
// 얕은 비교를 하기 때문에 객체타입의 값은 무조건 서로 다른값이라도 판단한다.
// 함수는 매번 전달될떄마다 다른 주소값을 가지게 되기 때문에 props가 바꼈다고 판단
// memo와 같은 컴포넌트들을 고차컴포넌트(HOC) 라고 부른다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
// T -> Props 바뀌지 않음 -> 리렌더링x
// F -> Props 바뀜 -> 리렌더링o
// if (prevProps.id !== nextProps.id) return false;
// if (prevProps.isDone !== nextProps.isDone) return false;
// if (prevProps.content !== nextProps.content) return false;
// if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
