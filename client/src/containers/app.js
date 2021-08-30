import { connect } from 'react-redux';
import App from '../App';
import { fetchRestaurantsData } from '../actions/restaurant';
import { logIn, logOut, setRedirect } from '../actions/user';

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  logged: state.user.logged,
  redirect: state.user.redirect
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantsData: () => {
    dispatch(fetchRestaurantsData());
  },
  logOut: () => {
    dispatch(logOut());
  },
  logIn: () => {
    dispatch(logIn());
  },
  setRedirect: (bool) => {
    dispatch(setRedirect(bool));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);