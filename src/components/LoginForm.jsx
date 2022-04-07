import { useDebugValue, useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={() => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={() => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
