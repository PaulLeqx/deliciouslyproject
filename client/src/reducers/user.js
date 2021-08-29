import { CHANGE_FIELD_VALUE, REGISTER_FORM_SUBMIT } from "../actions/user";

export const initialState = {
  username: "",
  email: "",
  password: "",
  loginEmail: "",
  loginPassword: ""
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value
      }
    case REGISTER_FORM_SUBMIT:
      return {
        ...state,
        username: "",
        email: "",
        password: ""
      }
    default: {
      return state
    }
  }
};

export default reducer;