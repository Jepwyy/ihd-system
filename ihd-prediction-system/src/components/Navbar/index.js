import React from 'react'
import './index.css'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()
  console.log(user)

  const onLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <nav className='navigation-bar'>
      <div className='welcome'>
        Welcome, {user && user?.email}
        <span className='person-icon'>
          <i className='fas fa-user icon-user'></i>
        </span>
      </div>
      {/* Horizontal menu */}
      <ul className='menu'>
        {/* Menu items */}
        <li className='menu-item'>Results</li>
        <li className='menu-item'>History</li>
      </ul>

      <button
        className='logout-button'
        onClick={onLogout}
      >
        <span className='logout-icon'>
          <i class='fa-solid fa-right-from-bracket'></i>
        </span>
        Logout
      </button>
    </nav>
  )
}

export default NavigationBar
