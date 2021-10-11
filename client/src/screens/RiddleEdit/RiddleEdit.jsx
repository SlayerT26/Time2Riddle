import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneRiddle } from "../../services/riddles";
import "./RiddleEdit.css";

function RiddleEdit(props) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    hint: "",
    timer: "",
    level: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchRiddle = async () => {
      const riddle = await getOneRiddle(id);
      setFormData({
        question: riddle.question,
        answer: riddle.answer,
        hint: riddle.hint,
        timer: riddle.timer,
        level: riddle.level,
      });
    };
    fetchRiddle();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="CreateDiv">
        <form
          className="CreateForm"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRiddleEdit(id, formData);
          }}
        >
          <div className="CreateTextDiv">
            <textarea
              className="CreateTextArea"
              type="text"
              name="question"
              id="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Enter question"
              required
            />
          </div>
          <div className="CreateTextAnswer">
            <input
              className="CreateTextAnswerInput"
              type="text"
              name="answer"
              id="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="Type in Answer"
              required
            />
          </div>
          <div className="CreateTextHint">
            <input
              className="CreateTextHintInput"
              type="text"
              name="hint"
              id="hint"
              value={formData.hint}
              onChange={handleChange}
              placeholder="(Optional: Hint)"
            />
          </div>
          <div className="CreateExtraInputs">
            <input
              className="CreateExtraTimer"
              placeholder="Timer: Minute increments"
              name="timer"
              id="timer"
              onChange={handleChange}
              type="integer"
              required
            />
            <input
              className="CreateExtraLevel"
              placeholder="Level: 1-5"
              name="level"
              id="level"
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <div className="CreateButton">
            <input></input>
            <button className="CreateButtonSubmit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RiddleEdit;
