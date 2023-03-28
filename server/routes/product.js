const auth = require("../middleware/auth");
const { Product } = require("../model/product");
const { validateProduct } = require("../middleware/validator");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { productimages } = require("../middleware/multer");

router.post(
  "/createproduct",
  productimages.single("prodimg"),
  async (req, res) => {
    const response = await validateProduct(req.body);
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
    const { name, description, sku, mrp, sp } = req.body;
    let products = new Product({
      _id,
      image: req.file.filename,
      name,
      description,
      sku,
      mrp,
      sp,
      ProductNumber: lastProductNumber,
    });
    await products.save();
    res.status(200).send("Product created successfully!");
  }
);

router.get("/getproduct", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (ex) {
    res.status(500).send("No Products Found");
  }
});

module.exports = router;
