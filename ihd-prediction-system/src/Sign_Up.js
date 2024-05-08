import React, { useState } from 'react'
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import toast from 'react-hot-toast'

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { createUser } = UserAuth()

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setCredentials((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      if (credentials.password !== credentials.confirmPassword) {
        return toast.error('Password does not match')
      }

      toast.loading('loading..', { id: 'signup_loading' })

      await createUser(credentials.email, credentials.password)

      toast.dismiss('signup_loading')
      navigate('/prediction')
    } catch (e) {
      toast.dismiss('signup_loading')
      console.log(e.message)
    }
  }

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='logo'>
          <img
            src='logo.png'
            alt='Insert IHD Prediction System Logo Here'
          />
        </div>
        <h2 className='welcome-text'>Sign Up</h2>
        <form onSubmit={onSubmitForm}>
          <label
            className='input-label'
            htmlFor='username'
          >
            Email:
          </label>
          <div className='input-group'>
            <input
              id='email'
              type='text'
              placeholder={usernameFocus ? '' : 'Enter your email'}
              required
              name='email'
              onChange={handleFormChange}
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
              name='password'
              onChange={handleFormChange}
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
          <label
            className='input-label'
            htmlFor='confirm-password'
          >
            Confirm Password:
          </label>
          <div className='input-group'>
            <input
              id='confirm-password'
              type={confirmPasswordShown ? 'text' : 'password'}
              placeholder={confirmPasswordFocus ? '' : 'Confirm your password'}
              required
              name='confirmPassword'
              onChange={handleFormChange}
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
            <i
              onClick={toggleConfirmPasswordVisibility}
              className={`fas ${
                confirmPasswordShown ? 'fa-eye-slash' : 'fa-eye'
              } icon-password`}
            ></i>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <p className='text-center'>
          Already have an account? <Link to='/'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
