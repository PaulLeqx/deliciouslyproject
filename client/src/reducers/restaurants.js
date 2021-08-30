import { CHANGE_FIELD_VALUE_RESTAURANT_CREATE, CREATE_RESTAURANT_SUBMIT, SAVE_RESTAURANTS } from "../actions/restaurant";

export const initialState = {
  restaurants: [],
  name: "",
  spec: "",
  address: "",
  lat: "",
  long: "",
  tag1: "",
  tag2: "",
  tag3: "",
  tag4: "",
  pic1: "",
  pic2: "",
  pic3: "",
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SAVE_RESTAURANTS :
      return {
        ...state,
        restaurants: action.restaurants
      }
    case CHANGE_FIELD_VALUE_RESTAURANT_CREATE :
      return {
        ...state,
        [action.name]: action.value
      }
    case CREATE_RESTAURANT_SUBMIT : 
      return {
        ...state,
        name: "",
        spec: "",
        address: "",
        lat: "",
        long: "",
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
        pic1: "",
        pic2: "",
        pic3: ""
      }
    default: {
      return state
    }
  }
};

export default reducer;