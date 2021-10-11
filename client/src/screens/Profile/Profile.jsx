import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

function Profile(props) {
  const [userRiddles, setUserRiddles] = useState(null);
  const [user, setUser] = useState("");
  const { currentUser, riddles, handleRiddleDelete } = props;

  useEffect(() => {
    const filterRiddles = riddles.filter(
      (riddle) => riddle.user_id === currentUser?.id
    );
    setUserRiddles(filterRiddles);
  }, [riddles]);

  useEffect(() => {
    const riddleUser = currentUser?.username;
    console.log(riddleUser);
    setUser(riddleUser);
  }, [currentUser]);

  if (!userRiddles) return <h1>Loading...</h1>;

  return (
    <div className="ProfileDiv">
      <div className="ProfileFlex">
        <div className="UserWelcome">
          <h1 className="WelcomeUser">Welcome {user}</h1>
        </div>
        {userRiddles?.map((riddle) => (
          <div key={riddle.id}>
            <Link to={`/riddles/${riddle.id}/edit`} id="RiddleEditLink">
              <div className="ProfileSetUp">
                <div className="ProfileQuestionList">
                  <h1 className="ProfileQuestions">{riddle.question}</h1>
                </div>
                <div className="ProfileExtras">
                  <h3 className="ProfileExtraLevel">Level: {riddle.level}</h3>
                  <h3 className="ProfileExtraTimer">
                    Timer: {riddle.timer} minutes
                  </h3>
                  <h3 className="ProfileExtraEdit">Click to Edit</h3>
                </div>
              </div>
            </Link>
            <button
              onClick={() => handleRiddleDelete(riddle.id)}
              className="ProfileDelete"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
