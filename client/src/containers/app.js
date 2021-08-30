import { connect } from 'react-redux';
import App from '../App';
import { fetchRestaurantsData } from '../actions/restaurant';
import { logIn, logOut } from '../actions/user';

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  logged: state.user.logged
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);