import { useState } from 'react';

function TaskTracker({ currentUser, tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") {
      alert("Please enter a task first.");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="content-container">
      <h2>{currentUser}'s Event-Driven Task Tracker</h2>
      <p>Total Tasks: {tasks.length}</p>

      <form className="horizontal-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit" className="login-btn">Add</button>
        {tasks.length > 0 && (
          <button type="button" className="action-btn" onClick={clearAll}>
            Clear All
          </button>
        )}
      </form>

      <div className="mydiv task-box">
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span
                  onClick={() => toggleTask(task.id)}
                  className={task.completed ? "task-text completed" : "task-text"}
                >
                  {task.text}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskTracker;