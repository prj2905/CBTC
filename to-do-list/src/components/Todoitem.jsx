
import React from 'react';

function TodoItem({ task, markTaskComplete, completed }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      {task.dateAdded && <span> (Added on: {task.dateAdded.toLocaleString()})</span>}
      {task.dateCompleted && <span> (Completed on: {task.dateCompleted.toLocaleString()})</span>}
      {!completed && <button onClick={markTaskComplete}>Complete</button>}
    </div>
  );
}

export default TodoItem;
