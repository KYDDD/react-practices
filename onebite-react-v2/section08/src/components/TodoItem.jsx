import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="Content">Todo...</div>
      <div className="Date">Date</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
