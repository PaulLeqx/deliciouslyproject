import axios from 'axios';

import { CREATE_RESTAURANT_SUBMIT, fetchRestaurantsData, FETCH_RESTAURANTS_DATA, saveRestaurants } from '../actions/restaurant';
import { setRedirect } from '../actions/user';

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
    case CREATE_RESTAURANT_SUBMIT:
      {
        const state = store.getState();
        const config = {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        axios.post('http://localhost:5000/api/private/create', {
          name: state.restaurants.name,
          spec: state.restaurants.spec,
          address: state.restaurants.address,
          lat: state.restaurants.lat,
          long: state.restaurants.long,
          tags: [
            state.restaurants.tag1,
            state.restaurants.tag2,
            state.restaurants.tag3,
            state.restaurants.tag4
          ],
          pics: [
            state.restaurants.pic1,
            state.restaurants.pic2,
            state.restaurants.pic3
          ]
        },
        config)
        .then((response) => {
          store.dispatch(setRedirect(true));
          store.dispatch(fetchRestaurantsData());
        })
        .catch((error) => {
          console.log(error);
        })
      }
    default: {}
  }
  next(action);
}

export default restaurant;