import axios from 'axios';

import { FETCH_RESTAURANTS_DATA, saveRestaurants } from '../actions/restaurant';

const baseURL = 'http://localhost:5000';

const restaurant = (store) => (next) => (action) => {
  switch(action.type) {
    case FETCH_RESTAURANTS_DATA:
      {
        axios.get('/api/restaurant',
        {baseURL})
        .then((response) => {
          store.dispatch(saveRestaurants(response.data.data));
        })
        .catch((error) =>  {
          console.log(error);
        });
        break;
      }
    default: {}
  }
  next(action);
}

export default restaurant;