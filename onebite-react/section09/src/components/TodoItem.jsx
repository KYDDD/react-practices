import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default TodoItem;
