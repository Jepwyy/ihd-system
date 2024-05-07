import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import toast from 'react-hot-toast'

const Login = ({ switchToSignUp }) => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  // handle email input
  const handleOnChangeEmail = (email) => {
    setEmail(email)
  }

  const handleOnChangePassword = (password) => {
    setPassword(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoginError('')
    try {
      // show loading
      toast.loading('loading..', { id: 'login_loading' })
      await signIn(email, password)

      // hide loading after login
      toast.dismiss('login_loading')

      // navigate
      navigate('/prediction')
    } catch (e) {
      toast.error(e.message)
      toast.dismiss('login_loading')
      console.log(e.message)
    }
  }

  console.log(email, password)
  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='logo'>
          <img
            src='logo.png'
            alt='Insert IHD Prediction System Logo Here'
          />
        </div>
        <h2 className='welcome-text'>Welcome Back!</h2>
        <span>{loginError}</span>
        <form onSubmit={handleSubmit}>
          <label
            className='input-label'
            htmlFor='username'
          >
            Email:
          </label>
          <div className='input-group'>
            <input
              id='username'
              type='text'
              placeholder={usernameFocus ? '' : 'Enter your email'}
              onChange={(e) => handleOnChangeEmail(e.target.value)}
              required
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <i className='fas fa-user icon-user'></i>
          </div>
          <label
            className='input-label'
            htmlFor='password'
          >
            Password:
          </label>
          <div className='input-group'>
            <input
              id='password'
              type={passwordShown ? 'text' : 'password'}
              placeholder={passwordFocus ? '' : 'Enter your password'}
              required
              onChange={(e) => handleOnChangePassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fas ${
                passwordShown ? 'fa-eye-slash' : 'fa-eye'
              } icon-password`}
            ></i>
          </div>
          <button type='submit'>Login</button>
        </form>
        <p className='text-center'>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
