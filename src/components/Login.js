import React, { useState } from "react";
import "../styles/Login.css"; // Make sure this path is correct

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>{" "}
        {/* Forgot Password Link */}
      </form>
      <div className="footer">
        <p>
          New here? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
