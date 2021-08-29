import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import {changeFieldValue, registerFormSubmit} from '../actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  password: state.user.password
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (value, name) => {
    dispatch(changeFieldValue(value, name));
  },
  handleRegister: () => {
    dispatch(registerFormSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);