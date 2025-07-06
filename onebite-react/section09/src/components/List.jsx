import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filteredTodos = getFilteredData();

  return (
    <section className="List">
      <h4>TodoList 🌱</h4>
      <input value={search} onChange={onChangeSearch} type="text" placeholder="검색어를 입력하세요" />

      <ul className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></TodoItem>;
        })}
      </ul>
    </section>
  );
};

export default List;
