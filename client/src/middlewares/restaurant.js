import axios from 'axios';

import { CREATE_RESTAURANT_SUBMIT, FETCH_RESTAURANTS_DATA, FETCH_RESTAURANT_DATA, saveRestaurants, saveRestaurantData, fetchRestaurantsData, UPDATE_RESTAURANT_SUBMIT } from '../actions/restaurant';
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
    case FETCH_RESTAURANT_DATA:
      {
        axios.get(`/api/restaurant/${action.id}`,
        {baseURL})
        .then((response) => {
          console.log('fetchRestaurant');
          store.dispatch(saveRestaurantData(
            response.data.restaurant.name,
            response.data.restaurant.address,
            response.data.restaurant.lat,
            response.data.restaurant.long,
            response.data.restaurant.pics[0],
            response.data.restaurant.pics[1],
            response.data.restaurant.pics[2],
            response.data.restaurant.pics[3],
            response.data.restaurant.pics[4],
            response.data.restaurant.pics[5],
            response.data.restaurant.spec,
            response.data.restaurant.tags[0],
            response.data.restaurant.tags[1],
            response.data.restaurant.tags[2],
            response.data.restaurant.tags[3]
            ));
        })
        .catch((error) => {
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
            state.restaurants.pic3,
            state.restaurants.pic4,
            state.restaurants.pic5,
            state.restaurants.pic6
          ]
        },
        config)
        .then((response) => {
          console.log('Createrestaurant');
          store.dispatch(setRedirect(true));
          store.dispatch(fetchRestaurantsData());
        })
        .catch((error) => {
          console.log(error);
        });
        break;
      }
    case UPDATE_RESTAURANT_SUBMIT:
      {
        const state = store.getState();
        const config = {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        axios.put(`http://localhost:5000/api/private/update/${action.id}`,
        {
          name: state.restaurant.name,
          spec: state.restaurant.spec,
          address: state.restaurant.address,
          lat: state.restaurant.lat,
          long: state.restaurant.long,
          tags: [
            state.restaurant.tag1,
            state.restaurant.tag2,
            state.restaurant.tag3,
            state.restaurant.tag4
          ],
          pics: [
            state.restaurant.pic1,
            state.restaurant.pic2,
            state.restaurant.pic3,
            state.restaurant.pic4,
            state.restaurant.pic5,
            state.restaurant.pic6
          ]
        },
        config)
        .then((response) => {
          console.log('Updaterestaurant');
          console.log(response);
          store.dispatch(setRedirect(true));
          store.dispatch(fetchRestaurantsData());
        })
        .catch((error) => {
          console.log(error);
        });
        break;
      }
    default: {}
  }
  next(action);
}

export default restaurant;