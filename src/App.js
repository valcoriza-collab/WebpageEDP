import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Counter from './pages/Counter';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import TaskTracker from './pages/TaskTracker';

function App() {
  const [currentUser, setCurrentUser] = useState("Guest");
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav currentUser={currentUser} taskCount={tasks.length} />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
            <Route path="/tasks" element={<TaskTracker currentUser={currentUser} tasks={tasks} setTasks={setTasks} />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;