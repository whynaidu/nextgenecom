const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "trending");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const productstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "productimages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const productimages = multer({ storage: productstorage });
const trending = multer({ storage: storage });

module.exports = { trending, productimages };
