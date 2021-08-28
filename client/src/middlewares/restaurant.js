import axios from 'axios';
const restaurant = (store) => (next) => (action) => {
  switch(action.type) {
    default: {}
  }
  next(action);
}

export default restaurant;