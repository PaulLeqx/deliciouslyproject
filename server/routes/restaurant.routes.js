const router = require("express").Router();
const restaurantController = require("../controllers/restaurant.controller");

router.get("/", restaurantController.getRestaurants);
router.get("/:id", restaurantController.getRestaurant);

module.exports = router;