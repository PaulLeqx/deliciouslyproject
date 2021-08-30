const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');
const { protect } = require('../middleware/auth');

router.post("/create", protect, restaurantController.createRestaurant);
// router.route("/create").put(protect, restaurantController.updateRestaurant);
// router.post("/create", restaurantController.createRestaurant);
// router.put("/update", restaurantController.updateRestaurant);

module.exports = router;