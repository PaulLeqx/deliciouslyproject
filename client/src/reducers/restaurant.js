import { CHANGE_FIELD_VALUE_RESTAURANT_UPDATE, SAVE_RESTAURANT_DATA } from "../actions/restaurant";

export const initialState = {
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
  pic4: "",
  pic5: "",
  pic6: "",
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SAVE_RESTAURANT_DATA:
      return{
        ...state,
        name: action.name,
        spec: action.spec,
        address: action.address,
        lat: action.lat,
        long: action.long,
        tag1: action.tag1,
        tag2: action.tag2,
        tag3: action.tag3,
        tag4: action.tag4,
        pic1: action.pic1,
        pic2: action.pic2,
        pic3: action.pic3,
        pic4: action.pic4,
        pic5: action.pic5,
        pic6: action.pic6,
      }
    case CHANGE_FIELD_VALUE_RESTAURANT_UPDATE:
      return {
        ...state,
        [action.name]: action.value
      }
    default: {
      return state
    }
  }
};

export default reducer;