import { Link } from 'react-router-dom'
import './CreateAccount.css'

function CreateAccount() {
  return (
    <>
      <div className="Account-nav">
        <div>
          <img src="https://i.imgur.com/3l4jp3Y.png" alt="ransom" width="900px" />
        </div>
        <div className="div-login">
          <Link to='/login' id="AccountLogin">
            <h2 className="AccountLogin">Login</h2>
          </Link>
        </div>
      </div>
      <div className="Account-Create">
        <div className="Account-div">

          <div className="image-div">

            <img src="https://i.imgur.com/gIU1FCo.png" alt="create" width="35%" />
            <img src="https://i.imgur.com/bvy18f8.png" alt="account" width="35%" />

          </div>
          <form className="Account-form">

            <div className='Form-div'>
              <label className='Account-label'>Username</label>
              <input className='Account-input' type="text" name="Username" />
            </div>
            <div className='Form-div'>
              <label className='Account-label'>Email</label>
              <input className='Account-input' type="text" name="Email" />
            </div>
            <div className='Form-div'>
              <label className='Account-label'>Password</label>
              <input className='Account-input' type="password" name="password" />
            </div>
            <div className='Form-button'>
              <button className='button-form'>Create</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default CreateAccount