import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
      <div className="Account-Login">
        <div className="Login-div">
          <div className="image-div">
            <img
              src="https://i.imgur.com/M2SnSj9.png"
              alt="create"
              width="35%"
            />
          </div>
          <form
            className="Login-form"
            onSubmit={(e) => {
              e.preventDefault();
              props.handleLogin(formData);
            }}
          >
            <div className="Login-Form-div">
              <label htmlFor="username" className="Login-label">
                Username
              </label>
              <input
                className="Login-input"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="Login-Form-div">
              <label htmlFor="password" className="Login-label">
                Password
              </label>
              <input
                className="Login-input"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="Login-Form-button">
              <button className="Login-button-form">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
