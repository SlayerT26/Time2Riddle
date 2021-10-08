import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import Login from "./screens/Login/Login";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import Riddles from "./screens/Riddles/Riddles";

import { useState, useEffect } from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import { Layout } from "./components";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/login" exact>
        <Login handleLogin={handleLogin} />
      </Route>
      <Route path="/createaccount" exact>
        <CreateAccount handleRegister={handleRegister} />
      </Route>
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path="home">
            <Container />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
