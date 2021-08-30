import {Link, BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import {useEffect} from 'react';
import DisplayCardButton from './components/DisplayCardButton';


import './App.css';
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm';
import Dashboard from "./containers/Dashboard";


const App = ({
  restaurants, 
  fetchRestaurantsData,
  logged,
  logOut,
  logIn
}) => {

  useEffect(() => {
    fetchRestaurantsData();
    if(localStorage.getItem("authToken")) {
      logIn();
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    logOut();
  }

  return (
    <div className="App">
        {restaurants.length > 0 ? restaurants.map((restaurant) => (
          <DisplayCardButton
            key={restaurant._id}
            restaurant={restaurant}
          />
        )) : null}
      <Router>
        <Switch>
          <Route exact path="/">
            {!logged ?
              <div>
                <RegisterForm />
                <LoginForm /> 
              </div>
              :
              <Redirect to="/dashboard" />
            }
          </Route>
          <Route exact path="/dashboard">
            {logged ?
              <div>
                <Link to="/" onClick={handleLogOut}>Logout</Link>
                <Dashboard/>
              </div>
              :
              <Redirect to="/"/>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
