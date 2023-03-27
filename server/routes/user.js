const { CommonUser, validateEndUser } = require("../model/user");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const generateAuthToken = require("../common/auth");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
  const response = await validateEndUser(req.body);
  if (response.error) {
    return res.status(400).send(response.errorMessage);
  }

  const _id = uuidv4();
  let { name, email, password } = req.body;
  email = email.toLowerCase();

  let user = await CommonUser.findOne({ email: email });
  if (user) {
    return res.status(403).send("Already registered. Please login in!");
  } else {
    let createdAt = moment().format("MMMM Do YYYY");
    user = new CommonUser({
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

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  email = email.toLowerCase();

  const user = await CommonUser.findOne({ email: email });
  console.log(user);
  if (!user) return res.status(403).send("Invalid email or password");

  bcrypt.compare(password, user.password, function (err, result) {
    if (!result) return res.status(403).send("Invalid email or password");
    else {
      const payload = { email, access_level: user.access_level };
      const token = generateAuthToken({ payload });
      res.status(200).header("x-auth-token", token).send({
        user_id: user._id,
        username: user.name,
        token: token,
        ssoLogin: user.ssoLogin,
        access_level: user.access_level,
        department_name: user.department_name,
      });
    }
  });
});

module.exports = router;
