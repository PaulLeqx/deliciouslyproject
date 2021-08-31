const RestaurantModel = require("../models/Restaurant.model");

module.exports.createRestaurant = async (req, res, next) => {
  const {name, spec, address, long, lat, tags, pics} = req.body;

  try {
    const restaurant = await RestaurantModel.create({name, spec, address, long, lat, tags, pics});

    res.status(201).json({
      success: true,
      restaurant
    })
  } catch(err) {
    return res.status(401).json({success: false, error: 'missing'});
  }
};

module.exports.updateRestaurant = async (req, res, next) => {

  const {
    name, 
    spec, 
    address, 
    long, 
    lat, 
    tag1, 
    tag2, 
    tag3, 
    tag4, 
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
  } = req.body;

  try {
    const restaurant = await RestaurantModel.findOneAndUpdate({_id: req.params.id},
      {
        name,
        spec,
        address,
        long,
        lat,
        tags:[tag1, tag2, tag3, tag4],
        pics:[pic1, pic2, pic3, pic4, pic5, pic6]
      });

    await restaurant.save();

    res.status(200).json({
      success: true,
      restaurant
    });
  } catch (err) {
    return res.status(401).json({err, success: false, error: 'missing'});
  }
};

module.exports.getRestaurants = async (req, res, next) => {
  try{
    const data = await RestaurantModel.find();
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getRestaurant = async (req, res, next) =>  {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id);
    res.status(201).json({
      success: true,
      restaurant
    });
  }  catch (error) {
    res.status(404).json({success: false, error:"no restaurant found"});
  }
};