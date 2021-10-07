
import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './screens/Homepage/Homepage';
import Login from './screens/Login/Login'
import CreateAccount from './screens/CreateAccount/CreateAccount'
import Riddles from './screens/Riddles/Riddles';


function App() {
  return (
    <>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path="/createaccount" exact>
        <CreateAccount />
      </Route>
      <Switch>
        <Route path="/Riddles" exact>
          <Riddles />
        </Route>
      </Switch>

    </>
  );
}

export default App;
