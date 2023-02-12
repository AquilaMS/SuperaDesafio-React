import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="App">
      <div className="all-content-form">
        <div className='background-form'>
          <div className='login-register-form'>
            <div>
              <input type="text" name="name" placeholder='Name' />
            </div>
            <div>
              <input type="text" name="name" placeholder='Email' />
            </div>
            <div>
              <input type="password" name="name" placeholder='Password' />
            </div>
            <input className='form-button' type="submit" value="Register" />
            <Link to={'/login'}>
              <button className='form-button-alt'>Already have a Account</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Register;