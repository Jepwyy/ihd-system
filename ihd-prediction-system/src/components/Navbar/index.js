import React from 'react';
import './index.css'; 

const NavigationBar = ({ userName, onLogout }) => {
  return (
    <nav className="navigation-bar">
    
      <div className="welcome">
        Welcome, {/*userName*/}
     
        <span className="person-icon"><i className="fas fa-user icon-user"></i></span>
      </div>
      {/* Horizontal menu */}
      <ul className="menu">
        {/* Menu items */}
        <li className="menu-item">Results</li>
        <li className="menu-item">History</li>
      </ul>
    
      <button className="logout-button" onClick={onLogout}>

        <span className="logout-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
        Logout
      </button>
    </nav>
  );
};

export default NavigationBar;
