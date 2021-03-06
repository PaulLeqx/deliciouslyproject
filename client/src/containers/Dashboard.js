import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { changeFieldValueRestaurantCreate, createRestaurantSubmit } from '../actions/restaurant';

const mapStateToProps = (state) => ({
  name: state.restaurants.name,
  spec: state.restaurants.spec,
  address: state.restaurants.address,
  lat: state.restaurants.lat,
  long: state.restaurants.long,
  tag1: state.restaurants.tag1,
  tag2: state.restaurants.tag2,
  tag3: state.restaurants.tag3,
  tag4: state.restaurants.tag4,
  pic1: state.restaurants.pic1,
  pic2: state.restaurants.pic2,
  pic3: state.restaurants.pic3,
  pic4: state.restaurants.pic4,
  pic5: state.restaurants.pic5,
  pic6: state.restaurants.pic6
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (value, name) => {
    dispatch(changeFieldValueRestaurantCreate(value, name))
  },
  createRestaurant: () => {
    dispatch(createRestaurantSubmit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);