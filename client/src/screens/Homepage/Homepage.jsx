import { Link } from "react-router-dom"
import './Homepage.css'

function Homepage() {
  return (
    <>
      <div className="HomeFlex1">
        <div className="Home-nav">
          <div>
            <img src="https://i.imgur.com/3l4jp3Y.png" alt="ransom" width="1000px" />
          </div>
          <div className="div-login">
            <Link to='/login' id="HomeLogin">
              <h2 className="HomeLogin">Login</h2>
            </Link>
          </div>
        </div>
        <div className="HomeParagraph">
          <p />
          <p className="Para1">Welcome to Time2Riddle. Do you enjoy being challenged?<br />
            Being creative? Or both?<br />
            Then this is your app.<br />
            Time 2 Riddle will allow users to solve riddles. And if solving<br />
            isn’t enough, then create them. Create the most elaborate riddle for other user’s.<br />
            The app will also allow you to save your favorite riddle in your profile. <br />
            So you can come back, to try and solve it again or send to a friend.<br />
            <Link to="/CreateAccount" id="HomeToSignup">
              <p className="Para2">Riddle me this and click here to start</p>
            </Link>
          </p>
          <p />
        </div>
      </div>
    </>
  )
}

export default Homepage