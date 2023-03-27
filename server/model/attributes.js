const mongoose = require("mongoose");
var moment = require("moment");

const AttributesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    default: moment().format("MMM Do YYYY"),
  },
});

const attributes = mongoose.model("attributes", AttributesSchema);

exports.attributes = attributes;
