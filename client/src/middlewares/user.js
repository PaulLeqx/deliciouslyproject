import axios from 'axios';
import { LOGIN_FORM_SUBMIT, REGISTER_FORM_SUBMIT, logIn } from '../actions/user';

const baseURL = "http://localhost:5000";

const user = (store) => (next) => (action) => {
  switch(action.type) {
    case REGISTER_FORM_SUBMIT:
    {
      const state = store.getState();
      axios.post('/api/auth/register',
      {
        username: state.user.username,
        email: state.user.email,
        password: state.user.password
      }, {baseURL})
      .then((response) => {
        console.log('register done', response);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    }
    case LOGIN_FORM_SUBMIT:
      {
        const state = store.getState();
        axios.post('/api/auth/login', {
          email: state.user.loginEmail,
          password: state.user.loginPassword
        }, {baseURL})
        .then((response) => {
          if(response.data.token) {
            localStorage.setItem("authToken", response.data.token);
            store.dispatch(logIn());
          }
        })
        .catch((error) => {
          console.log(error);
        });
        break;
      }
    default: {}
  }
  next(action);
}

export default user;