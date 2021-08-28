const router = require("express").Router();
const restaurantController = require("../controllers/restaurant.controller");

router.post("/create", restaurantController.createRestaurant);
// router.put("/update", restaurantController.updateRestaurant);
// router.get("/:id", restaurantController.getRestaurant);

module.exports = router;