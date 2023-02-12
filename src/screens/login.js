import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signinUser } from '../logic/login'
import MyToasts from '../components/toasts/Toasts'
import { toast } from 'react-toastify';


const Login = () => {
  const [username, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigateTo = useNavigate()
  const changeScreen = () => navigateTo('/home')

  const getDataFromForm = () => {
    signinUser({ username, password })
      .then(res => {
        if (res.error) toast('Username or password are incorrect')
        else {
          toast('Welcome back!')
          changeScreen()
        }
      })
  }

  const getUsernameChanges = (changes) => {
    setName(changes.target.value)
  }
  const getPasswodChanges = (changes) => {
    setPassword(changes.target.value)
  }

  return (
    <div className="App">
      <div className='all-content-form'>
        <div className="background-form">
          <form className='login-register-form'>
            <div>
              <input type="text" name="name" placeholder='Username' onChange={getUsernameChanges} />
            </div>
            <div>
              <input type="password" name="name" placeholder='Password' onChange={getPasswodChanges} />
            </div>
            <input onClick={getDataFromForm} className='form-button' value="Login" />
            <Link to={'/register'}>
              <button className='form-button-alt'>Create a account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;