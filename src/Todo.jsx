import React from 'react';
import './App.css';

function Todo({ id, todo, onToggle, onDelete }) {
  return (
    <li id='todo-item' tabIndex = {0}>
      <p 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          opacity: todo.completed ? '0.5' : '1'
        }} 
        className='todo-p'
      >
        {todo.text}
      </p>
      <div className='buttons'>
        <button type='button' onClick={() => onToggle(id)}> 
          {todo.completed ? '되돌리기' : '완료로 표시'} 
        </button>
        <button type='button' onClick={() => onDelete(id)}>삭제</button>
      </div>
    </li>
  );
}

export default Todo;