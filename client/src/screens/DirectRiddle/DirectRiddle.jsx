import "./DirectRiddle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneRiddle } from "../../services/riddles";
import { postAnswer } from "../../services/answer";

function DirectRiddle(props) {
  const [riddleQuestion, setRiddleQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [guess, setGuess] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRiddle = async () => {
      const riddleData = await getOneRiddle(id);
      setRiddleQuestion(riddleData);
    };
    if (props.currentUser) {
      fetchSingleRiddle();
    }
  }, [id, props.currentUser]);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleCreateAnswer();
    if (guess.toLowerCase() === riddleQuestion.answer.toLowerCase()) {
      alert("That is Correct! You're a Riddler!");
    } else {
      alert("Try try try again!");
    }
  };

  return (
    <>
      <div className="RiddleDirectBackground">
        <div className="DirectRiddleWhite">
          <div className="RiddleQuestionDiv">
            <h1 className="DirectRiddleQuestion">{riddleQuestion?.question}</h1>
          </div>

          <form className="DirectRiddleForm" onSubmit={handleSubmit}>
            <input
              className="AnswerInput"
              type="text"
              value={guess}
              name="answer"
              id="answer"
              onChange={handleChange}
              placeholder="Enter Answer Here"
            />

            <div className="RiddleExtras">
              <h3 className="TimeExtra">
                Expected time to solve: {riddleQuestion?.timer} minutes
              </h3>
              <button className="ButtonExtra">Submit</button>
              <h3
                onClick={() => alert(riddleQuestion.hint || "No Hint")}
                className="HintExtra"
              >
                Hint? Click Here?
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DirectRiddle;
