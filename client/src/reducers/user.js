import { CHANGE_FIELD_VALUE, REGISTER_FORM_SUBMIT, LOGIN, LOGOUT, SET_REDIRECT } from "../actions/user";

export const initialState = {
  username: "",
  email: "",
  password: "",
  loginEmail: "",
  loginPassword: "",
  logged: false,
  redirect: false
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
    case LOGIN:
      return {
        ...state,
        logged: true,
        loginEmail: "",
        loginPassword: ""
      }
    case LOGOUT:
      return {
        ...state,
        logged: false
      }
    case SET_REDIRECT:
      return {
        ...state,
        redirect: action.bool
      }
    default: {
      return state
    }
  }
};

export default reducer;