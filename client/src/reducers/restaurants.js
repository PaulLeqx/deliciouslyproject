import { SAVE_RESTAURANTS } from "../actions/restaurant";

export const initialState = {
  restaurants: [],
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SAVE_RESTAURANTS :
      return {
        ...state,
        restaurants: action.restaurants
      }
    default: {
      return state
    }
  }
};

export default reducer;