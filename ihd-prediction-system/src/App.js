import React, { useState } from 'react';
import Login from './Login'; 
import SignUp from './Sign_Up';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin ? 
        <Login switchToSignUp={() => setShowLogin(false)} /> :
        <SignUp switchToLogin={() => setShowLogin(true)} />
      }
    </div>
  );
}

export default App;
