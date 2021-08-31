import { connect } from 'react-redux';
import UpdateRestaurants from '../components/UpdateRestaurant';

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRestaurants);