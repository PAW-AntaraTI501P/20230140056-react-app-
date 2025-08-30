import React, { useState } from "react";

const TodoItem = ({ todo, index, onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <tr className="bg-gray-800 text-white">
        <td colSpan="3" className="p-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow p-2 rounded-md border border-cyan-400 bg-gray-900 text-white"
            />
            <button
              onClick={handleSave}
              className="px-4 py-1 rounded-lg bg-green-500 text-white hover:bg-green-400 text-sm"
            >
              Simpan
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-400 text-sm"
            >
              Batal
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
      } hover:bg-gray-600 transition text-sm`}
    >
      <td className="p-3 border border-gray-700 text-white">
        {todo.completed ? <s>{todo.task}</s> : todo.task}
      </td>
      <td className="p-3 border border-gray-700 text-center">
        {todo.completed ? "✅ Selesai" : "⌛ Belum"}
      </td>
      <td className="p-3 border border-gray-700 text-right space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 text-xs"
        >
          Update
        </button>
        <button
          onClick={() => onToggleCompleted(todo.id, todo.completed)}
          className={`px-3 py-1 rounded-md text-white text-xs ${
            todo.completed
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-green-500 hover:bg-green-400"
          }`}
        >
          {todo.completed ? "Belum" : "Selesai"}
        </button>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-400 text-xs"
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
