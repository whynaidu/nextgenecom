const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, index: true },
  password: { type: String },
  email: { type: String },
  createdAt: { type: String },
});

const User = mongoose.model("users", userSchema);

exports.User = User;
