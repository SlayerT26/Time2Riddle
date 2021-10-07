import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="Login-nav">
        <div>
          <img src="https://i.imgur.com/3l4jp3Y.png" alt="ransom" width="900px" />
        </div>
        <div className="div-login">
          <Link to='/CreateAccount' id="CreateAccount">
            <h2 className="CreateAccount">Create Account</h2>
          </Link>
        </div>
      </div>
      <div className="Account-Login">
        <div className="Login-div">

          <div className="image-div">

            <img src="https://i.imgur.com/M2SnSj9.png" alt="create" width="35%" />

          </div>
          <form className="Login-form">

            <div className='Login-Form-div'>
              <label className='Login-label'>Username</label>
              <input className='Login-input' type="text" name="Username" />
            </div>
            <div className='Login-Form-div'>
              <label className='Login-label'>Password</label>
              <input className='Login-input' type="password" name="password" />
            </div>
            <div className='Login-Form-button'>
              <button className='Login-button-form'>Login</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login