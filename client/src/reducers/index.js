import { combineReducers } from "redux";
import restaurantReducer from './restaurants';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
});

export default rootReducer;