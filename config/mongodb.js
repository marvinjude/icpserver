const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to cluster");
      console.log(err);
    }
  }
);
