import { combineReducers } from "redux";
import restaurantsReducer from './restaurants';
import userReducer from './user';
import restaurantReducer from './restaurant';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  user: userReducer,
  restaurant: restaurantReducer
});

export default rootReducer;