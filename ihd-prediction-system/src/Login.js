import React, { useState } from 'react';
import './Login.css';

const Login = ({ switchToSignUp }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="logo.png" alt="Insert IHD Prediction System Logo Here" />
        </div>
        <h2 className="welcome-text">Welcome Back!</h2>
        <form>
          <label className="input-label" htmlFor="username">Username:</label>
          <div className="input-group">
            <input 
              id="username" 
              type="text" 
              placeholder={usernameFocus ? "" : "Enter your username"} 
              required 
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <i className="fas fa-user icon-user"></i>
          </div>
          <label className="input-label" htmlFor="password">Password:</label>
          <div className="input-group">
            <input 
              id="password" 
              type={passwordShown ? "text" : "password"} 
              placeholder={passwordFocus ? "" : "Enter your password"} 
              required 
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <i 
              onClick={togglePasswordVisibility} 
              className={`fas ${passwordShown ? 'fa-eye-slash' : 'fa-eye'} icon-password`}
            ></i>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="#" onClick={switchToSignUp}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
