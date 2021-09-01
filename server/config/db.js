const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://"+ process.env.DB_USER_PASS + "@deliciously.ndk66.mongodb.net/Deliciously?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("failed to connect to MongoDB", err));