import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import {changeFieldValue, loginFormSubmit} from '../actions/user';

const mapStateToProps = (state) => ({
  loginEmail: state.user.loginEmail,
  loginPassword: state.user.loginPassword
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (value, name) => {
    dispatch(changeFieldValue(value, name));
  },
  handleLogin: () => {
    dispatch(loginFormSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);