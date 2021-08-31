const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');
const { protect } = require('../middleware/auth');

router.post("/create", protect, restaurantController.createRestaurant);
router.put("/update/:id", protect, restaurantController.updateRestaurant);

module.exports = router;