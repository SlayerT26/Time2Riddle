import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  const [userRiddles, setUserRiddles] = useState(null);

  const { currentUser, riddles, handleRiddleDelete, toggle } = props;

  useEffect(() => {
    const filterRiddles = riddles.filter(
      (riddle) => riddle.user_id === currentUser?.id
    );
    setUserRiddles(filterRiddles);
  }, [riddles]);

  if (!userRiddles) return <h1>Loading...</h1>;

  return (
    <div>
      {userRiddles?.map((riddle) => (
        <div key={riddle.id}>
          <Link to={`/riddles/${riddle.id}/edit`}>
            <h1>{riddle.question}</h1>
          </Link>
          <button onClick={() => handleRiddleDelete(riddle.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Profile;
