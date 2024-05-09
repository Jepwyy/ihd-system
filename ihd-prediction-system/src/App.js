import React, { useState } from 'react'
import Login from './Login'
import SignUp from './Sign_Up'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Prediction from './pages/Prediction'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  // const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route
            path='/prediction'
            element={
              <ProtectedRoute>
                <Prediction />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App
