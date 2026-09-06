import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  function onChangeCheckBox() {
    onUpdate(id);
  }

  function onClickDeleteButton() {
    onDelete(id);
  }
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} type="checkbox" checked={isDone} />
      <div className="Content">{content}</div>
      <div className="Date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
