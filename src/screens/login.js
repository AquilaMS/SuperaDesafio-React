import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="App">
      <div className='all-content-form'>
        <div className="background-form">
          <form className='login-register-form'>
            <div>
              <input type="text" name="name" placeholder='Email' />
            </div>
            <div>
              <input type="password" name="name" placeholder='Password' />
            </div>
            <input className='form-button' value="Login" />
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