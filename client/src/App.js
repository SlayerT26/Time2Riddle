import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import Login from "./screens/Login/Login";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import Riddles from "./screens/Riddles/Riddles";
import CreateRiddle from "./screens/CreateRiddle/CreateRiddle";
import Profile from "./screens/Profile/Profile";
import RiddleEdit from "./screens/RiddleEdit/RiddleEdit";

import { Layout } from "./components";
import { useState, useEffect } from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

import {
  getAllRiddles,
  postRiddle,
  deleteRiddle,
  putRiddle,
} from "./services/riddles";
import DirectRiddle from "./screens/DirectRiddle/DirectRiddle";
import { postAnswer } from "./services/answer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [riddles, setRiddles] = useState([]);
  const [toggle, setToggle] = useState(false);
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
    history.push("/riddles");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/riddles");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  useEffect(() => {
    const fetchRiddles = async () => {
      const riddleList = await getAllRiddles();
      setRiddles(riddleList);
    };
    fetchRiddles();
  }, [toggle]);

  const handleRiddleCreate = async (riddleData) => {
    const newRiddle = await postRiddle(riddleData);
    setRiddles((prevState) => [...prevState, newRiddle]);
    history.push("/riddles");
  };

  const handleRiddleEdit = async (id, riddleData) => {
    await putRiddle(id, riddleData);
    setToggle((prev) => !prev);
    history.push("/profile");
  };

  const handleRiddleDelete = async (id) => {
    await deleteRiddle(id);
    setToggle((prev) => !prev);
  };

  const handleCreateAnswer = async (id) => {
    await postAnswer(id);
  };
  return (
    <>
      <Switch>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Route path="/login" exact>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/createaccount" exact>
            <CreateAccount handleRegister={handleRegister} />
          </Route>
          <Route path="/create" exact>
            <CreateRiddle
              handleRiddleCreate={handleRiddleCreate}
              currentUser={currentUser}
            />
          </Route>
          <Route path="/profile" exact>
            <Profile
              currentUser={currentUser}
              riddles={riddles}
              handleRiddleDelete={handleRiddleDelete}
            />
          </Route>
          <Route path="/riddles/:id/edit" exact>
            <RiddleEdit handleRiddleEdit={handleRiddleEdit} riddles={riddles} />
          </Route>
          <Route path="/riddles/:id" exact>
            <DirectRiddle
              currentUser={currentUser}
              handleCreateAnswer={handleCreateAnswer}
            />
          </Route>
          <Route path="/riddles" exact>
            <Riddles riddles={riddles} currentUser={currentUser} />
          </Route>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
