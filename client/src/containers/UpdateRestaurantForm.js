import { connect } from 'react-redux';
import { changeFieldValueRestaurantUpdate, fetchRestaurantData, updateRestaurantSubmit } from '../actions/restaurant';
import UpdateRestaurantForm from '../components/UpdateRestaurantForm';

const mapStateToProps = (state) => ({
  name: state.restaurant.name,
  spec: state.restaurant.spec,
  address: state.restaurant.address,
  lat: state.restaurant.lat,
  long: state.restaurant.long,
  tag1: state.restaurant.tag1,
  tag2: state.restaurant.tag2,
  tag3: state.restaurant.tag3,
  tag4: state.restaurant.tag4,
  pic1: state.restaurant.pic1,
  pic2: state.restaurant.pic2,
  pic3: state.restaurant.pic3,
  pic4: state.restaurant.pic4,
  pic5: state.restaurant.pic5,
  pic6: state.restaurant.pic6,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantData: (id) => {
    dispatch(fetchRestaurantData(id))
  },
  changeFieldValue: (value, name) =>  {
    dispatch(changeFieldValueRestaurantUpdate(value, name))
  },
  handleSubmitUpdate: (id) => {
    dispatch(updateRestaurantSubmit(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRestaurantForm);