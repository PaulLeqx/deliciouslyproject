export const FETCH_RESTAURANTS_DATA = "FETCH_RESTAURANTS_DATA";
export const fetchRestaurantsData = () => ({
  type: FETCH_RESTAURANTS_DATA,
});

export const SAVE_RESTAURANTS = "SAVE_RESTAURANTS";
export const saveRestaurants = (restaurants) => ({
  type: SAVE_RESTAURANTS,
  restaurants
});

export const CHANGE_FIELD_VALUE_RESTAURANT_CREATE = "CHANGE_FIELD_VALUE_RESTAURANT_CREATE";
export const changeFieldValueRestaurantCreate = (value, name) => ({
  type: CHANGE_FIELD_VALUE_RESTAURANT_CREATE,
  value,
  name
});

export const CREATE_RESTAURANT_SUBMIT = "CREATE_RESTAURANT_SUBMIT";
export const createRestaurantSubmit = () => ({
  type: CREATE_RESTAURANT_SUBMIT
});

export const FETCH_RESTAURANT_DATA = "FETCH_RESTAURANT_DATA";
export const fetchRestaurantData = (id) => ({
  type: FETCH_RESTAURANT_DATA,
  id
});

export const SAVE_RESTAURANT_DATA = "SAVE_RESTAURANT_DATA";
export const saveRestaurantData = (
  name, 
  address, 
  lat, 
  long, 
  pic1,
  pic2, 
  pic3, 
  pic4, 
  pic5, 
  pic6, 
  spec, 
  tag1,
  tag2,
  tag3,
  tag4) => ({
  type: SAVE_RESTAURANT_DATA,
  name,
  address,
  lat,
  long,
  pic1,
  pic2, 
  pic3, 
  pic4, 
  pic5, 
  pic6,
  spec,
  tag1,
  tag2,
  tag3,
  tag4
});

export const CHANGE_FIELD_VALUE_RESTAURANT_UPDATE = "CHANGE_FIELD_VALUE_RESTAURANT_UPDATE";
export const changeFieldValueRestaurantUpdate = (value, name) => ({
  type: CHANGE_FIELD_VALUE_RESTAURANT_UPDATE,
  value,
  name
});

export const UPDATE_RESTAURANT_SUBMIT = "UPDATE_RESTAURANT_SUBMIT";
export const updateRestaurantSubmit = (id) => ({
  type: UPDATE_RESTAURANT_SUBMIT,
  id
});