import {useEffect, useState} from 'react';
import DisplayCardButton from './components/DisplayCardButton';


import './App.css';
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm';


const App = ({
  restaurants, 
  fetchRestaurantsData
}) => {

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  console.log(restaurants);

  return (
    <div className="App">
      {restaurants.length > 0 ? restaurants.map((restaurant) => (
        <DisplayCardButton
          key={restaurant._id}
          restaurant={restaurant}
        />
      )) : null}
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
