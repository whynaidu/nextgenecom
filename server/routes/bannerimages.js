const auth = require("../middleware/auth");
const { Banner } = require("../model/bannerimages");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { trending } = require("../middleware/multer");

router.post("/upload", trending.single("trendingimages"), async (req, res) => {
  const _id = uuidv4();
  const trendimg = new Banner({
    _id,
    image: req.file.filename,
    text: req.body.text,
  });
  trendimg
    .save()
    .then(() => res.send("Image Uploaded"))
    .catch((err) => res.status(404).send(err));
});

router.get("/image", async (req, res) => {
  try {
    const result = await Banner.find({});
    res.status(200).send(result);
  } catch (ex) {
    res.status(500).send("No images Found");
  }
});

module.exports = router;
