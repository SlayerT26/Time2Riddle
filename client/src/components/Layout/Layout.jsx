import "./Layout.css";
import HomeNavBar from "../HomeNavBar/HomeNavBar";
import { Link } from "react-router-dom";

const Layout = (props) => (
  <>
    <div className="layout">
      {props.currentUser ? (
        <div>
          <nav className="NavBar">
            <div className="Nav-Image">
              <img
                src="https://i.imgur.com/3l4jp3Y.png"
                alt="ransom"
                width="1000px"
              />
            </div>
            <div className="Nav-Div">
              <Link to="/riddles" id="RiddleLink">
                <h1 className="Nav-h1">Riddle</h1>
              </Link>
              <Link to="/create" id="CreateLink">
                <h1 className="Nav-h1">Create</h1>
              </Link>
              <Link to="/profile" id="ProfileLink">
                <h1 className="Nav-h1">Profile</h1>
              </Link>
              <div id="NavLogout">
                <h1 className="NavButton" onClick={props.handleLogout}>
                  Logout
                </h1>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <HomeNavBar />
        </div>
      )}
      <div>{props.children}</div>
    </div>
  </>
);

export default Layout;
