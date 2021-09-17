const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = User;
