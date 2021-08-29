import { combineReducers } from "redux";
import restaurantReducer from './restaurants';
import userReducer from './user';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  user: userReducer
});

export default rootReducer;