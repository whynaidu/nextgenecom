const auth = require("../middleware/auth");
const { Product } = require("../model/product");
const { validate } = require("../middleware/validator");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/createproduct", async (req, res) => {
  const response = await validate(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }

  let lastProductNumber;
  try {
    const lastProduct = await Product.findOne().sort({ ProductNumber: -1 });
    if (lastProduct) {
      lastProductNumber = lastProduct.ProductNumber;
      lastProductNumber++;
    }
  } catch (ex) {}

  const _id = uuidv4();
  const { name, description, sku } = req.body;
  let products = new Product({
    _id,
    name,
    description,
    sku,
    ProductNumber: lastProductNumber,
  });
  await products.save();
  res.status(200).send("Product created successfully!");
});

router.post("/updateproduct", async (req, res) => {
  const response = await validate(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }

  const { name, description, sku } = req.body;
  let products = new Product({
    _id,
    name,
    description,
    sku,
    ProductNumber: lastProductNumber,
  });
  await products.save();
  res.status(200).send("Product created successfully!");
});

module.exports = router;
