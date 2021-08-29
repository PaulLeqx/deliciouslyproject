require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 5000;

const restaurantRoutes = require("./routes/restaurant.routes");
const authRoutes = require("./routes/auth.routes");
// const privateRoutes = require("./routes/private.routes");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello to strenghtKeeper API');
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/private", privateRoutes);

// server
const server = app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});