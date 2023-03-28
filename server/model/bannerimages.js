const mongoose = require("mongoose");
var moment = require("moment");

const bannerimagesSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    createdAt: {
      type: String,
      default: moment().format("MMM Do YYYY"),
    },
  },
  { timestamps: true }
);

const Banner = mongoose.model("banner", bannerimagesSchema);

exports.Banner = Banner;
