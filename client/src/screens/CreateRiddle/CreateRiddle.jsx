import { useState } from "react";
import "./CreateRiddle.css";

function CreateRiddle(props) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    hint: "",
    timer: "",
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
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRiddleCreate(formData);
          }}
        >
          <div>
            <textarea
              type="text"
              name="question"
              id="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Enter question"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="answer"
              id="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="Type in Answer"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="hint"
              id="hint"
              value={formData.hint}
              onChange={handleChange}
              placeholder="(Optional: Hint)"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateRiddle;
