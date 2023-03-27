const Joi = require("joi");

async function validateProduct(product) {
  let error = false;
  const schema = Joi.object({
    sku: Joi.string().min(5).max(1024).required(),
    name: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
  });

  try {
    const value = await schema.validateAsync(product);
    return { error, value };
  } catch (err) {
    error = true;
    let errorMessage = err.details[0].message;
    return { error, errorMessage };
  }
}

async function attributes(body) {
  let error = false;

  const schema = Joi.object({
    name: Joi.string().required(),
    value: Joi.string().required(),
    category: Joi.string().required(),
  });

  try {
    const value = await schema.validateAsync(body);
    return { error, value };
  } catch (err) {
    error = true;
    let errorMessage = err.details[0].message;
    return { error, errorMessage };
  }
}

exports.validate = validateProduct;
exports.validateattributes = attributes;