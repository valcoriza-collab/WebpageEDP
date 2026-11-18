import { Link } from 'react-router-dom';

function Nav({ currentUser, taskCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Counter</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/login">Login ({currentUser})</Link>
      <Link to="/tasks">Task Tracker ({taskCount})</Link>
    </nav>
  );
}

export default Nav;