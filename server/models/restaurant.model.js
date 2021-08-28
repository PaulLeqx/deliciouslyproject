const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name:  {
      type: String,
      requried: true,
      trim: true
    },
    spec: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    long: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true,
    },
    tags: [String],
    pics: [String],
  }
);