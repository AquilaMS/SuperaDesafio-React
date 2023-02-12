import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { registerUser } from '../logic/register';

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = useNavigate()
  const changeScreen = () => navigateTo('/login')

  const getDataFromForm = async () => {
    registerUser({ username, email, password })
      .then(res => {
        if (res.error) toast('Email already registered or password field is empty')
        else {
          toast(`Welcome! Now you can login!`)
          changeScreen()
        }
      })
  }

  const getNameChanges = (changes) => {
    setName(changes.target.value)
  }
  const getEmailChanges = (changes) => {
    setEmail(changes.target.value)
  }

  const getPasswordChanges = (changes) => {
    setPassword(changes.target.value)
  }
  return (
    <div className="App">
      <div className='background-image-form'>

        <div className="all-content-form">
          <div className='background-form'>
            <div className='login-register-form'>
              <div>
                <input type="text" name="name" placeholder='Name' onChange={getNameChanges} />
              </div>
              <div>
                <input type="text" name="name" placeholder='Email' onChange={getEmailChanges} />
              </div>
              <div>
                <input type="password" name="name" placeholder='Password' onChange={getPasswordChanges} />
              </div>
              <input className='form-button' type="submit" value="Register" onClick={getDataFromForm} />
              <Link to={'/login'}>
                <button className='form-button-alt'>Already have a Account</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Register;