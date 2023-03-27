const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, index: true },
  password: { type: String },
  email: { type: String },
  createdAt: { type: String },
});

const CommonUser = mongoose.model("AllUser", userSchema);

async function validateEndUser(endUser) {
  let error = false;
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  try {
    const value = await schema.validateAsync(endUser);
    return { error, value };
  } catch (err) {
    error = true;
    let errorMessage = err.details[0].message;
    return { error, errorMessage };
  }
}

exports.CommonUser = CommonUser;
exports.validateEndUser = validateEndUser;
