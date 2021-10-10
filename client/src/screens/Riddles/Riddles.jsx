import { Link } from "react-router-dom";
import "./Riddles.css";

function Riddles(props) {
  console.log(props);
  return (
    <>
      <div className="Riddle-div-background">
        {props.riddles.map((riddle) => (
          <Link to={`/riddles/${riddle.id}`} id="RiddlesLink">
            <article className="Riddle-Article">
              <div className="Riddle-Question">
                <h1 className="RiddleQuestion">{riddle.question}</h1>
              </div>
              <div className="Riddle-info">
                <h3 className="Riddle-h3">Creator: {riddle.creator}</h3>
                <h3 className="Riddle-h3">Level: {riddle.level}</h3>
                <h3 className="Riddle-h3">Timer: {riddle.timer}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Riddles;
