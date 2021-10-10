import "./HomeNavBar.css";
import { Link } from "react-router-dom";

function HomeNavBar() {
  return (
    <>
      <div className="Account-nav">
        <div>
          <img
            src="https://i.imgur.com/3l4jp3Y.png"
            alt="ransom"
            width="900px"
          />
        </div>
        <div className="div-HomeNavBar">
          <Link to="/login" id="AccountLogin">
            <h2 className="AccountLogin">Login</h2>
          </Link>
          <Link to="/createaccount" id="AccountCreate">
            <h2 className="AccountCreate">Create Account</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeNavBar;
