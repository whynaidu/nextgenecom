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

const profilestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profileimages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const trending = multer({ storage: storage });
const productimages = multer({ storage: productstorage });
const profileimages = multer({ storage: profilestorage });

module.exports = { trending, productimages, profileimages };
