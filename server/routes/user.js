const { User } = require("../model/user");
const { Product } = require("../model/product");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const generateAuthToken = require("../common/auth");
const auth = require("../middleware/auth");
const { validateEndUser, validateaddress } = require("../middleware/validator");

//user register api

router.post("/register", async (req, res) => {
  const response = await validateEndUser(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }

  const _id = uuidv4();
  let { name, email, password } = req.body;
  email = email.toLowerCase();

  let user = await User.findOne({ email: email });
  console.log(user);
  if (user) {
    return res.status(403).send("Already registered. Please login in!");
  } else {
    let createdAt = moment().format("MMMM Do YYYY");
    user = new User({
      _id,
      name,
      email,
      password,
      createdAt,
    });
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) console.log(err);
      user.password = hash;
      await user.save();
    });

    const payload = { email };
    const token = generateAuthToken({ payload });
    res.status(200).header("x-auth-token", token).send(email.toLowerCase());
  }
});

//user login api

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  email = email.toLowerCase();

  const user = await User.findOne({ email: email });
  if (!user) return res.status(403).send("Invalid email or password");

  bcrypt.compare(password, user.password, function (err, result) {
    if (!result) return res.status(403).send("Invalid email or password");
    else {
      const payload = { email };
      const token = generateAuthToken({ payload });
      res.status(200).header("x-auth-token", token).send({
        user_id: user._id,
        username: user.name,
        token: token,
      });
    }
  });
});

//add to cart on product

router.post("/addtocart", async (req, res) => {
  const { customerid, productid } = req.body;
  try {
    const product = await Product.find({ _id: productid });
    const user = await User.updateOne(
      { _id: customerid },
      { $push: { cart: product[0] } }
    );
    res.status(200).send("Added product");
  } catch (err) {
    console.log(err);
  }
});

//my cart clicked

router.post("/mycart", async (req, res) => {
  const { customerid } = req.body;
  try {
    const user = await User.find({ _id: customerid });
    res.status("200").send(user[0].cart);
  } catch (err) {
    console.log(err);
  }
});

//Checkout onClick

router.post("/checkout", async (req, res) => {
  const { customerid } = req.body;
  try {
    const user = await User.find({ _id: customerid });
    res.status(200).send(user[0].address);
  } catch (err) {
    console.log(err);
  }
});

//checkout address form

router.post("/checkout/address/:id", async (req, res) => {
  const { id } = req.params;
  const response = await validateaddress(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }
  try {
    const user = await User.updateOne(
      { _id: id },
      { $push: { address: req.body } }
    );
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
