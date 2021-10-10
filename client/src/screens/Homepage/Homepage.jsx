import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage(props) {
  return (
    <>
      <div className="HomeFlex1">
        <div className="HomeParagraph">
          <p />
          <p className="Para1">
            Welcome to Time2Riddle. Do you enjoy being challenged?
            <br />
            Being creative? Or both?
            <br />
            Then this is your app.
            <br />
            Time 2 Riddle will allow users to solve riddles. And if solving
            <br />
            isn’t enough, then create them. Create the most elaborate riddle for
            other user’s.
            <br />
            The app will also allow you to save your favorite riddle in your
            profile. <br />
            So you can come back, to try and solve it again or send to a friend.
            <br />
            <Link to="/CreateAccount" id="HomeToSignup">
              <p className="Para2">Riddle me this and click here to start</p>
            </Link>
          </p>
          <p />
        </div>
      </div>
    </>
  );
}

export default Homepage;
