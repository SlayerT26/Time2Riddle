import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneRiddle } from "../../services/riddles";
import "./RiddleEdit.css";

function RiddleEdit(props) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    hint: "",
    timer: "",
    level: "",
  });

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
      <div className="EditDiv">
        <form
          className="EditForm"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRiddleEdit(id, formData);
          }}
        >
          <div className="EditTextDiv">
            <label className="EditQuestionLabel">Edit Question</label>
            <textarea
              className="EditTextArea"
              type="text"
              name="question"
              id="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>
          <div className="EditTextAnswer">
            <label className="EditAnswerLabel">Edit Answer</label>
            <input
              className="EditAnswerInput"
              type="text"
              name="answer"
              id="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="EditTextHint">
            <label className="EditHintLabel">Edit Hint</label>
            <input
              className="EditHintInput"
              type="text"
              name="hint"
              id="hint"
              value={formData.hint}
              onChange={handleChange}
            />
          </div>
          <div className="EditExtraInputs">
            <div className="EditTimerDiv">
              <label className="EditTimerLabel">Edit Timer</label>
              <input
                className="EditExtraTimer"
                name="timer"
                id="timer"
                value={formData.timer}
                onChange={handleChange}
                type="integer"
              />
            </div>
            <div className="EditLevelDiv">
              <label className="EditLevelLabel">Edit Level</label>
              <input
                className="EditExtraLevel"
                name="level"
                id="level"
                value={formData.level}
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>
          <div className="EditButton">
            <button className="EditSaveButton">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RiddleEdit;
