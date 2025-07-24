import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button 
        className={`complete-button ${todo.completed ? 'checked' : ''}`}
        onClick={() => toggleTodo(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && '✓'}
      </button>
      <span className="todo-text">{todo.text}</span>
      <button 
        className="delete-button"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;