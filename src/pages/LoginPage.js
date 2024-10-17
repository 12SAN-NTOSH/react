import React from "react";
import Login from "../components/Login";
import { loginUser } from "../utils/api";

const LoginPage = () => {
  const handleLogin = async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      console.log("Logged in:", userData);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      {/* <h1>Login Page</h1> */}
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
