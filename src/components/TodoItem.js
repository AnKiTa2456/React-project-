import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button type="submit" className="save-button">Save</button>
        </form>
      ) : (
        <div className="todo-content">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;