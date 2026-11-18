import { useState } from 'react';

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const actualusername = "admin";
  const actualpassword = "password"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === actualusername && password === actualpassword) {
      setCurrentUser(username);
      alert("Logged in successfully"); 
    } else {
      alert("Invalid username or password"); 
    }
  };

  return (
    <div className="content-container">
      <h2>Login Area</h2>
      <form className="horizontal-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;