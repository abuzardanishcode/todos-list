import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <article className="todo-item my-3 p-3 border rounded">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button 
        className="btn btn-danger" 
        onClick={() => onDelete(todo)}
        aria-label={`Delete ${todo.title}`}
      >
        Delete
      </button>
    </article>
  );
};

export default TodoItem;
