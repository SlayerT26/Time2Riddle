import { useState, useEffect } from "react";
import "./CreateRiddle.css";

function CreateRiddle(props) {
  const { currentUser } = props;

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    hint: "",
    timer: "",
    level: "",
    creator: "",
  });

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
            props.handleRiddleCreate(formData);
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
              value={formData.timer}
              onChange={handleChange}
              type="integer"
              required
            />
            <input
              className="CreateExtraLevel"
              placeholder="Level: 1-5"
              name="level"
              id="level"
              value={formData.level}
              onChange={handleChange}
              type="text"
              required
            />
          </div>
          <div className="CreateButton">
            <input
              className="UserNameInput"
              name="creator"
              id="creator"
              value={formData.creator}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              required
            />
            <button className="CreateButtonSubmit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateRiddle;
