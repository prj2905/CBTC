
import React, { useState } from 'react';
import TodoList from './components/ToDolist';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      const newTask = { text: taskText, dateAdded: new Date() };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  const markTaskComplete = (index) => {
    const taskToComplete = tasks.splice(index, 1)[0];
    taskToComplete.dateCompleted = new Date();
    setTasks([...tasks]);
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList tasks={tasks} markTaskComplete={markTaskComplete} />
      <h2>Completed Tasks</h2>
      <TodoList tasks={completedTasks} completed={true} />
    </div>
  );
}

export default App;
