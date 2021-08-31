import {Link, BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import {useEffect} from 'react';
import DisplayCardButton from './components/DisplayCardButton';


import './App.css';
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm';
import Dashboard from "./containers/Dashboard";
import UpdateRestaurants from "./containers/UpdateRestaurants";
import UpdateRestaurantForm from "./containers/UpdateRestaurantForm";


const App = ({
  restaurants, 
  fetchRestaurantsData,
  logged,
  logOut,
  logIn,
  setRedirect,
  redirect
}) => {

  useEffect(() => {
    fetchRestaurantsData();
    if(localStorage.getItem("authToken")) {
      logIn();
    }
    console.log(restaurants);
  }, [fetchRestaurantsData]);

  useEffect(() => {
    setRedirect(false);
  }, [redirect]);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    logOut();
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {restaurants.length > 0 ? restaurants.map((restaurant) => (
              <DisplayCardButton
                key={restaurant._id}
                restaurant={restaurant}
              />
            )) : null}
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
            {restaurants.length > 0 ? restaurants.map((restaurant) => (
              <DisplayCardButton
                key={restaurant._id}
                restaurant={restaurant}
              />
            )) : null}
            {logged && !redirect ?
              <div className="dashboard_wrapper">
                <Link to="/" onClick={handleLogOut}>Logout</Link>
                <Dashboard/>
              </div>
              :
              <Redirect to="/"/>
            }
          </Route>
          <Route exact path="/update">
            {logged && !redirect ?
              <UpdateRestaurants />
              :
              <Redirect to="/" />
            }
          </Route>
          <Route exact path="/update/:id">
          {logged && !redirect ?
              <UpdateRestaurantForm />
              :
              <Redirect to="/" />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
