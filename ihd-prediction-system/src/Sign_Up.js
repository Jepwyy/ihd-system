import React, { useState } from 'react';
import './Sign_Up.css';

const SignUp = ({ switchToLogin }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
          <img src="logo.png" alt="Insert IHD Prediction System Logo Here" />
        </div>
        <h2 className="welcome-text">Sign Up</h2>
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
            <i onClick={togglePasswordVisibility} 
               className={`fas ${passwordShown ? 'fa-eye-slash' : 'fa-eye'} icon-password`}></i>
          </div>
          <label className="input-label" htmlFor="confirm-password">Confirm Password:</label>
          <div className="input-group">
            <input 
              id="confirm-password" 
              type={confirmPasswordShown ? "text" : "password"} 
              placeholder={confirmPasswordFocus ? "" : "Confirm your password"} 
              required 
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
            <i onClick={toggleConfirmPasswordVisibility} 
               className={`fas ${confirmPasswordShown ? 'fa-eye-slash' : 'fa-eye'} icon-password`}></i>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="text-center">
          Already have an account? <a href="#" onClick={switchToLogin}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
