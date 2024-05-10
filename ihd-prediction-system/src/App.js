import React, { useState } from 'react'
import Login from './Login'
import SignUp from './Sign_Up'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Prediction from './pages/Prediction'
import ProtectedRoute from './components/ProtectedRoute'
import PredictionForm from './components/form/PredictionForm'
import PredictionTable from './components/table/PredictionTable'
function App() {
  // const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<Prediction />}>
            <Route path='/prediction-form' element={<PredictionForm />} />
            <Route path='/prediction-table' element={<PredictionTable />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App
