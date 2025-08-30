// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import "./TodoTable.css"; // tambahin CSS manual

const TodoList = ({ todos = [], onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  if (!todos || todos.length === 0) {
    return <p style={{ textAlign: "center", color: "gray" }}>Tidak ada tugas</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Tugas</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onToggleCompleted={onToggleCompleted}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
