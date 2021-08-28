const RestaurantModel = require("../models/Restaurant.model");

module.exports.createRestaurant = async (req, res, next) => {
  const {name, spec, address, long, lat, tags, pics} = req.body;

  try {
    const restaurant = await RestaurantModel.create({name, spec, address, long, lat, tags, pics});

    res.status(200).json({
      success: true,
      restaurant
    })
  } catch(err) {
    next(err);
  }
}