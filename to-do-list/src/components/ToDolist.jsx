// src/TodoList.js
import React from 'react';
import TodoItem from './Todoitem';

function TodoList({ tasks, markTaskComplete, completed }) {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          markTaskComplete={() => markTaskComplete(index)}
          completed={completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
