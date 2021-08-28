import { connect } from 'react-redux';
import App from '../../App';
import { fetchRestaurantsData } from '../../actions/restaurant';

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantsData: () => {
    dispatch(fetchRestaurantsData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);