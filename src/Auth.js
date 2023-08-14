import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth ({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSwitchAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log(`Logged in as ${username}`);
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData && userData.password === password) {
      console.log(`Logged in as ${username}`);
      onLogin(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();

    localStorage.setItem(
      username,
      JSON.stringify({ username, password, email })
    );
    alert(`Signed up as ${username}`);
  };

  return (
    <div className="loginContainer">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}
        <button className="login-btn" type="submit">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="signin-btn"
          type="button"
          onClick={handleSwitchAuthMode}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </div>
  );
}

export default Auth;
