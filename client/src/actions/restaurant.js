export const FETCH_RESTAURANTS_DATA = "FETCH_RESTAURANTS_DATA";
export const fetchRestaurantsData = () => ({
  type: FETCH_RESTAURANTS_DATA,
});

export const SAVE_RESTAURANTS = "SAVE_RESTAURANTS";
export const saveRestaurants = (restaurants) => ({
  type: SAVE_RESTAURANTS,
  restaurants
});