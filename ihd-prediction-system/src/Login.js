import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import toast from 'react-hot-toast'
import logo from './assets/logo.svg'

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
    <div className='bg-cover bg-center h-screen flex items-center justify-center bg-login'>
      <div className='bg-white px-32 py-5 rounded-2xl flex flex-col justify-center items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-36 h-36'
        />
        <h1 className='text-4xl'>Welcome Back !</h1>
        <div className='mt-5'>
          <form className='flex flex-col'>
            <label
              htmlFor='username'
              className='text-primary font-semibold'
            >
              Username:
            </label>
            <input
              type='text'
              className='p-2 border-[#353535] border-b-2'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
