export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const changeFieldValue = (value, name) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  name
});

export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
export const registerFormSubmit = () => ({
  type: REGISTER_FORM_SUBMIT
});

export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const loginFormSubmit = () => ({
  type: LOGIN_FORM_SUBMIT
});

export const LOGOUT = "LOGOUT";
export const logOut = () => ({
  type: LOGOUT
});

export const LOGIN = "LOGIN";
export const logIn = () => ({
  type: LOGIN
});