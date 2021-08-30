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