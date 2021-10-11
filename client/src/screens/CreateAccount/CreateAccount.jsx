import { Link } from "react-router-dom";
import "./CreateAccount.css";
import { useState } from "react";

function CreateAccount(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
      <div className="Account-Create">
        <div className="Account-div">
          <div className="image-div">
            <img
              src="https://i.imgur.com/gIU1FCo.png"
              alt="create"
              width="35%"
            />
            <img
              src="https://i.imgur.com/bvy18f8.png"
              alt="account"
              width="35%"
            />
          </div>
          <form
            className="Account-form"
            onSubmit={(e) => {
              e.preventDefault();
              props.handleRegister(formData);
            }}
          >
            <div className="Form-div">
              <label className="Account-label">Username</label>
              <input
                className="Account-input"
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="Form-div">
              <label className="Account-label">Email</label>
              <input
                className="Account-input"
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="Form-div">
              <label className="Account-label">Password</label>
              <input
                className="Account-input"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="Form-button">
              <button type="submit" className="button-form">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
