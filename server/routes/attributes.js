const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { attributes } = require("../model/attributes");
const { validateattributes } = require("../middleware/validator");

router.get("/getattributes/all/:category", async (req, res) => {
  try {
    const { category } = req.params;
    let attrval = await attributes.find({ category: category });
    res.status(200).send(attrval);
  } catch (ex) {
    res.status(404).send("Unable to fetch attributes");
  }
});

router.post("/create", async (req, res) => {
  const response = await validateattributes(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }

  const _id = uuidv4();
  let { name, value, category } = req.body;
  newattr = new attributes({
    _id,
    name,
    value,
    category,
  });
  await newattr.save();
  res.send("CREATED SUCCESSFULL");
});

router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await attributes.findByIdAndDelete(id);
    res.status(200).send("Delete successfully");
  } catch (err) {
    res.status(500).send("Failed to delete employee");
  }
});

module.exports = router;
