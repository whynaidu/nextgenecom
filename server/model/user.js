const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, index: true },
  password: { type: String },
  email: { type: String },
  createdAt: { type: String },
  cart: [],
  address: [],
});

const User = mongoose.model("users", userSchema);

exports.User = User;
